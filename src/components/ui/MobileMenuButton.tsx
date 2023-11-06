"use client";

import { NavLink } from "@/types";
import Link from "next/link";
import { useState } from "react";
import { Icons } from "../icons";

function MobileMenuButton({ items }: { items: NavLink[] | undefined }) {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  return (
    <>
      <button
        type="button"
        title="show mobile navigation"
        className="relative flex items-center space-x-2 text-primary lg:hidden p-3 rounded-full"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        {showMobileMenu ? <Icons.close /> : <Icons.menu />}
      </button>
      {showMobileMenu && (
        <section className="absolute inset-x-0 top-16 w-screen bg-background z-40">
          <nav className="w-full text-foreground">
            <ul className="w-full px-6 py-4">
              {items?.map((item) => (
                <li key={item.title} className="w-full">
                  <Link href={item.href} className="w-full py-3 hover:bg-primary/20">
                    <p className="py-3 font-body  font-semibold">{item.title}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </section>
      )}
    </>
  );
}

export default MobileMenuButton;
