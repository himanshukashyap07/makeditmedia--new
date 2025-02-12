
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { NavbarDemo } from "@/components/Navbar";
import Footer from "@/components/Footer";
import Logo from '@/assets/image/ME.png'
import Image from "next/image";
import { ToastContainer } from "react-toastify";
import MenuIcon from "@/components/ui/MenuIcon";
import MenuDoor from "@/components/MenuBarDoor";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div>
          <div className="bg-slate-900 w-full flex justify-evenly z-30 ">
            <Image className="ml-5 mt-2 w-16 md:w-24 lg:w-30 " src={Logo} alt="logo" />
            <div className="w-screen"></div>
            <MenuDoor />
          </div>
          <NavbarDemo />
        </div>
        {children}
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}
/**
 



 */