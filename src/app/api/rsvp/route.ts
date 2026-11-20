// Forwards RSVPs to a Google Apps Script web app that appends a row to a Google Sheet.
// Setup: see docs/rsvp-google-sheets.md. Needs RSVP_SHEET_URL (and RSVP_SHEET_SECRET) in .env.local.

// Basic in-memory rate limit: max 5 RSVPs per IP per 10 minutes (per server instance).
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) {
    for (const [k, v] of hits) if (v.every((t) => now - t >= WINDOW_MS)) hits.delete(k);
  }
  return recent.length > MAX_PER_WINDOW;
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";
  if (rateLimited(ip)) {
    return Response.json({ error: "Too many attempts. Please try again later." }, { status: 429 });
  }

  const url = process.env.RSVP_SHEET_URL;
  if (!url) {
    return Response.json({ error: "RSVP is not configured." }, { status: 500 });
  }

  let body: { name?: unknown; attending?: unknown; website?: unknown };
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real guests never see or fill this field; bots do. Pretend success.
  if (typeof body.website === "string" && body.website !== "") {
    return Response.json({ ok: true });
  }

  let name = typeof body.name === "string" ? body.name.trim().slice(0, 200) : "";
  // Stop Google Sheets from treating the name as a formula (=, +, -, @ at the start).
  if (/^[=+\-@]/.test(name)) name = `'${name}`;
  const attending = body.attending;
  if (!name || (attending !== "yes" && attending !== "no")) {
    return Response.json({ error: "Name and response are required." }, { status: 400 });
  }

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "text/plain" }, // avoids a CORS preflight on Apps Script
      body: JSON.stringify({
        secret: process.env.RSVP_SHEET_SECRET ?? "",
        name,
        attending,
      }),
      redirect: "follow",
    });
    const data = await res.json().catch(() => null);
    if (!res.ok || !data?.ok) throw new Error("Sheet rejected the RSVP");
  } catch {
    return Response.json({ error: "Could not save your RSVP." }, { status: 502 });
  }

  return Response.json({ ok: true });
}
