import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { mainNavConfig } from "@/config/MainNav";
import { siteConfig } from "@/config/site";
import clsx from "clsx";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const fontHeading = localFont({
  src: [
    {
      path: "./../../public/fonts/Makro/MakroXM-Bold.woff2",
      weight: "bold",
      style: "normal",
    },
    {
      path: "./../../public/fonts/Makro/MakroXM-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-heading",
});

const fontBody = localFont({
  src: [
    {
      path: "./../../public/fonts/Montserrat/Montserrat-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./../../public/fonts/Montserrat/Montserrat-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "./../../public/fonts/Montserrat/Montserrat-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./../../public/fonts/Montserrat/Montserrat-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "./../../public/fonts/Montserrat/Montserrat-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./../../public/fonts/Montserrat/Montserrat-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./../../public/fonts/Montserrat/Montserrat-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./../../public/fonts/Montserrat/Montserrat-Italic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-body",
});

export const metadata = {
  title: {
    default: siteConfig.name,
    // template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  // keywords: [
  //   "Next.js",
  //   "React",
  //   "Tailwind CSS",
  //   "Server Components",
  //   "Radix UI",
  // ],
  // authors: [
  //   {
  //     name: "shadcn",
  //     url: "https://shadcn.com",
  //   },
  // ],
  // creator: "shadcn",
  // themeColor: [
  //   { media: "(prefers-color-scheme: light)", color: "white" },
  //   { media: "(prefers-color-scheme: dark)", color: "black" },
  // ],
  // openGraph: {
  //   type: "website",
  //   locale: "en_US",
  //   url: siteConfig.url,
  //   title: siteConfig.name,
  //   description: siteConfig.description,
  //   siteName: siteConfig.name,
  // },
  // twitter: {
  //   card: "summary_large_image",
  //   title: siteConfig.name,
  //   description: siteConfig.description,
  //   images: [`${siteConfig.url}/og.jpg`],
  //   creator: "@shadcn",
  // },
  // icons: {
  //   icon: "/favicon.ico",
  //   shortcut: "/favicon-16x16.png",
  //   apple: "/apple-touch-icon.png",
  // },
  // manifest: `${siteConfig.url}/site.webmanifest`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontHeading.variable,
          fontBody.variable
        )}
      >
        <Navbar navConfig={mainNavConfig} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
