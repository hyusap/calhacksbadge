import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const editorial = localFont({
  src: [
    {
      path: "./PPEditorialNew-Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./PPEditorialNew-Ultralight.otf",
      weight: "200",
      style: "normal",
    },
  ],
  variable: "--font-editorial",
});

const neueMontreal = localFont({
  src: [
    {
      path: "./PPNeueMontreal-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./PPNeueMontreal-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./PPNeueMontreal-Book.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-neue",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${editorial.variable} ${neueMontreal.variable} font-neue`}
      >
        {children}
      </body>
    </html>
  );
}
