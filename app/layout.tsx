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
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Libre+Caslon+Display&display=swap" rel="stylesheet" />
        </head>
      <body>
        {children}
      </body>
    </html>
  );
}
