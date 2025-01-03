import type { Metadata } from "next";
import { New_Rocker } from "next/font/google";
import "./globals.css";

const newRocker = New_Rocker({
  subsets: ['latin'],
  weight: '400',
});

export const metadata: Metadata = {
  title: "Cat Of The Day",
  description: "Another day, another cat, nya.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${newRocker.className}`}>
        {children}
      </body>
    </html>
  );
}
