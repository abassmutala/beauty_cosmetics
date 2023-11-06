import { footerConfig } from "@/config/Footer";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "./icons";

function Footer() {
  return (
    <section className="relative py-8 md:py-12 bg-footer">
      <div className="relative px-6 md:px-8 max-w-7xl mx-auto">
        <div className="w-full flex items-center justify-center pb-8 md:pb-12">
          <div className="h-12 w-36 max-w-xs mx-auto">
            <Image
              src="/images/logo_full_colour.png"
              alt="Logo in full colour"
              width="1280"
              height="720"
              className="h-full object-center object-contain"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-6 py-6 pt-0 border-b bor">
          <div className="w-full text-center lg:text-left lg:self-end">
            <Link href="tel:+233262707878 hover:underline">
              <small className="text-sm font-heading font-bold">
                +233 (0) 26 270 7878
              </small>
            </Link>
          </div>
          <div className="w-full flex flex-col md:flex-row gap-6">
            {footerConfig.navCategories.map((category) => (
              <div className="w-full" key={category.title}>
                <div className="w-full text-left">
                  <p className="font-bold font-heading text-base text-center lg:text-start uppercase mb-2">
                    {category.title}
                  </p>
                  <ul className="">
                    {category.navLinks.map((link) => (
                      <li
                        className="py-1 text-center lg:text-start"
                        key={link.title}
                      >
                        <Link href={link.href} className="">
                          <small className="text-sm font-body font-medium text-foreground hover:text-primary">
                            {link.title}
                          </small>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full text-center lg:text-right lg:self-end">
            <Link href="mailto:support@example.com hover:underline">
              <small className="text-sm font-heading font-bold">
                support@example.com
              </small>
            </Link>
          </div>
        </div>
        <div className="w-full pt-6">
          <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-y-6">
            <div className="flex items-center gap-x-6 lg:pl-6">
              <Link href="" className="">
                <small className="font-medium font-body text-xs hover:text-primary">
                  Terms &amp; Conditions
                </small>
              </Link>
              <Link href="" className="">
                <small className="font-medium font-body text-xs hover:text-primary">
                  Privacy Policy
                </small>
              </Link>
            </div>
            <div className="flex items-center gap-x-8 lg:px-6">
              {footerConfig.socialLinks?.map((link) => {
                const Icon = Icons[link.icon!];
                return (
                  <Link href="" target="_blank" key={link.name}>
                    <Icon className="h-6 w-6 fill-foreground hover:fill-primary" />
                  </Link>
                );
              })}
            </div>

            <small className="font-body text-xs text-subtitle lg:pr-6">
              Copyright &copy; 2023, Pageline Concepts
            </small>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
