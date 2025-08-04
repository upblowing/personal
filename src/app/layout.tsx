import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins"
});

export const metadata: Metadata = { // the original source is from https://github.com/prettylittlelies so im keeping it as i wont use this right now.
  title: "opium.college",
  manifest: "/site.webmanifest",
  description: "Personal portfolio and presence page",
  keywords: ["portfolio", "developer", "fullstack", "discord", "presence"],
  authors: [{ name: "opium.college" }],
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#ffffff",
  colorScheme: "dark"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
