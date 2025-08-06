import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { Great_Vibes } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});
const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-great-vibes",
});


export const metadata: Metadata = {
  title: "Portfolio",
  description: "A website hosting daniEC3 portfolio page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${greatVibes.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
