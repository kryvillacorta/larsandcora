# RSVP → Google Sheets setup

1. Create a Google Sheet. In row 1 add headers: `Timestamp | Name | Attending`.
2. In the sheet: **Extensions → Apps Script**. Replace the code with:

```js
const SECRET = "pick-a-long-random-string"; // must match RSVP_SHEET_SECRET

function doPost(e) {
  const data = JSON.parse(e.postData.contents);
  if (data.secret !== SECRET) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false }))
      .setMimeType(ContentService.MimeType.JSON);
  }
  SpreadsheetApp.getActiveSheet().appendRow([
    new Date(),
    data.name,
    data.attending === "yes" ? "Yes" : "No",
  ]);
  return ContentService.createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

3. **Deploy → New deployment → Web app**. Execute as: *Me*. Who has access: *Anyone*. Copy the web app URL.
4. Create `.env.local` in the project root:

```
RSVP_SHEET_URL=<the web app URL>
RSVP_SHEET_SECRET=<same string as SECRET above>
```

5. Restart `npm run dev` (and set the same variables in your hosting provider for production).
