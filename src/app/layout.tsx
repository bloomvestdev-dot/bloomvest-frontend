import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bloovest",
  description: "Empower Your Financial Future",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
