"use client";

import { NavLink } from "@/types/index";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLinks({ links }: { links: NavLink[] }) {
  const pathName = usePathname();

  return (
    <>
      {links?.length ? (
        <nav className="hidden lg:flex gap-8 mx-4">
          {links?.map((item) => (
            <Link
              key={item.title}
              href={item.disabled ? "#" : item.href}
              className={clsx(
                "text-sm font-heading uppercase font-medium border-b-2 transition-colors hover:border-accent",
                item.disabled
                  ? "text-foreground/60 cursor-not-allowed"
                  : "text-foreground",
                pathName === item.href
                  ? "border-b-accent"
                  : "border-transparent"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      ) : null}
    </>
  );
}

export default NavLinks;
