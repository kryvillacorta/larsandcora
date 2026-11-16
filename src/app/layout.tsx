import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

// Headings / script-style labels
const anaktoria = localFont({
  src: "../fonts/Anaktoria.ttf",
  variable: "--font-heading",
});

// Body copy
const cooper = localFont({
  src: [
    { path: "../fonts/CooperLtBTLight.ttf", weight: "300", style: "normal" },
    { path: "../fonts/CooperLtBTLightItalic.ttf", weight: "300", style: "italic" },
  ],
  variable: "--font-body",
});

// Stand-in for the couple's name lettering until the final script font is added
const script = Cormorant_Garamond({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["italic"],
});

export const metadata: Metadata = {
  title: "Larwyn & Cora | Wedding",
  description:
    "You are cordially invited to the wedding of Larwyn and Cora — January 31, 2027, Frangeli House, Baguio City.",
  openGraph: {
    title: "Larwyn & Cora | Wedding",
    description: "You are cordially invited to our special day.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${anaktoria.variable} ${cooper.variable} ${script.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
