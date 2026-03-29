// src/app/layout.tsx
import type { Metadata } from "next";
import "../styles/fonts.css";
import "../styles/theme.css";
import "./globals.css";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Siyam IT Center — Narayanganj",
  description:
    "Your trusted digital service center in Narayanganj, Bangladesh. Visa processing, passport, trade license, air tickets and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
