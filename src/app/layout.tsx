import type { Metadata } from "next";
import {  Playfair_Display, Open_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/Footer";

const playfair = Playfair_Display({ subsets: ["latin"]});
const openSans = Open_Sans({ subsets: ["latin"]});

export const metadata: Metadata = {
  title: "TRA",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.className} ${openSans.className}`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}