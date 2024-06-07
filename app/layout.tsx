import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StartsCanvas from "@/app/main/StartBackground";
import Navbar from "@/app/Navbar/Navbar";
import Footerr from "@/app/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Space Portfolio",
  description: "This is my portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
  
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <StartsCanvas />
        <Navbar />
        {children}
        <Footerr />
      </body>
    </html>
  );
}