"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="md:top-2 top-5 hidden md:block" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={'/Home'}>
          <MenuItem setActive={setActive} active={active} item="HOME"></MenuItem>
        </Link>
        <Link href={'/About'}>
          <MenuItem setActive={setActive} active={active} item="ABOUT"></MenuItem>
        </Link>
        <Link href={'/Portfolio'}>
          <MenuItem setActive={setActive} active={active} item="PORTFOLIO"></MenuItem>
        </Link>
        <Link href={'/ContactUs'}>
          <MenuItem setActive={setActive} active={active} item="CONTACT US"></MenuItem>
        </Link>
      </Menu>
    </div>
  );
}
