import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Happy2Host EDU Africa",
  description:
    "Helping schools across Africa unlock the full potential of Google Workspace for Education.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${figtree.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
