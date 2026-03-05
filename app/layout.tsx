import type { Metadata } from "next";
import SmoothScrollProvider from "../Providers/SmoothScrollProvider";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/common/Navbar";
import Footer from "@/Components/common/Footer";
import localFont from "next/font/local";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const clashDisplay = localFont({
  src: [
    {
      path: "../public/fonts/clash-display/ClashDisplay-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/clash-display/ClashDisplay-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/clash-display/ClashDisplay-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/clash-display/ClashDisplay-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/clash-display/ClashDisplay-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-clash-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anugraha",
  description: "Anugraha - The best place to buy clothes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${clashDisplay.variable} antialiased flex flex-col gap-10 min-h-screen`}
      >
        {/* <SmoothScrollProvider> */}
        <Navbar />
        <main className="px-4 sm:px-8 flex-1">{children}</main>
        <Footer />
        {/* </SmoothScrollProvider> */}
      </body>
    </html>
  );
}
