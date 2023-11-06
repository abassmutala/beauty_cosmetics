import Link from "next/link";
import clsx from "clsx";
import MobileMenuButton from "./ui/MobileMenuButton";
import { IconLink, MainNavConfig, NavLink } from "@/types";
import { Icons } from "./icons";
import Image from "next/image";
import { mainNavConfig } from "@/config/MainNav";
import NavLinks from "./ui/NavLinks";

interface NavProps {
  items?: NavLink[];
  actionLinks?: IconLink[];
  children?: React.ReactNode;
}

export default function Navbar({ navConfig }: { navConfig: MainNavConfig }) {
  return (
    <header className="bg-white h-20">
      <div className="h-full px-6 md:px-8 max-w-7xl mx-auto">
        <div className="h-full py-2 md:py-3 flex items-center justify-between">
          <div className="">
            <Link href="/" className="">
              <div className="w-[120px] h-full">
                <Image
                  src="/images/logo_full_colour.png"
                  alt="logo"
                  width="1280"
                  height="720"
                  className="w-full object-center object-contain"
                />
              </div>
            </Link>
          </div>
          <MobileMenuButton items={mainNavConfig.mainNavLinks} />
          {/* <div className="flex gap-6 md:gap-10"> */}
          <NavLinks links={mainNavConfig.mainNavLinks} />
          {mainNavConfig.mainNavActionLinks?.length ? (
            <nav className="hidden lg:flex gap-4 ml-4">
              {mainNavConfig.mainNavActionLinks?.map((item) => {
                const Icon = Icons[item.icon!];
                return (
                  <button
                    key={item.name}
                    type="button"
                    // onClick={item.disabled ? "#" : item.href}
                    className={clsx(
                      "flex items-center justify-center transition-colors p-3",
                      item.disabled && "cursor-not-allowed opacity-80"
                    )}
                  >
                    <Icon className="h-6 w-6 hover:stroke-primary" />
                  </button>
                );
              })}
            </nav>
          ) : null}

          {/* </div> */}
        </div>
      </div>
    </header>
  );
}
