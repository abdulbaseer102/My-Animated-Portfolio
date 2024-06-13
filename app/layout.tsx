import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StartsCanvas from "@/app/components/main/back/page";
import Navbar from "./components/main/navbar/page";
import Footer from "./components/main/footer/page";

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
        <Footer />
      </body>
    </html>
  );
}