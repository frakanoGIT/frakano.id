"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {

  return (
    <header>
      <div className="flex justify-between items-center h-32 mx-12 border-b border-b-black text-3xl">
        <span className="text-6xl tracking-tighter ml-12">Frakano</span>
      </div>
    </header>
  );
}
