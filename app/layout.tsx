import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Varshith's Portfolio",
  description: "Made with Next, Spline and GSAP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <head>
            <link href="https://api.fontshare.com/v2/css?f[]=general-sans@700&display=swap" rel="stylesheet"/>
        </head>
      <body>
        {children}
      </body>
    </html>
  );
}
