import { LucideIcon } from "lucide-react"
import { Icons } from "@/components/icons"

export type SiteConfig = {
  name: string
  description: string
  url?: string
  ogImage?: string
  links?: {
    twitter: string
    instagram: string
  }
}

export type NavLink = {
  title: string
  href: string
  disabled?: boolean
}

export type IconLink = {
  icon?: keyof typeof Icons;//JSX.Element | LucideIcon;
  name: string;
  description?: string;
  disabled?: boolean;
}

export interface Category {
  id: string,
  name: string,
  image: string,
  href?: string,
}

export interface CategoryWithSubsections extends Category {
  subsections?: CategoryWithSubsections[];
}

export type Feature = {
  icon: keyof typeof Icons,
  title: string,
  description: string,
}

export type SocialLink = {
  icon?: keyof typeof Icons,
  name: string,
  link: string,
}

export type MainNavConfig = {
  mainNavLinks: NavLink[], mainNavActionLinks: IconLink[]
}

export type FooterConfig = { navCategories: { title: string, navLinks: NavLink[] }[], socialLinks: SocialLink[], phoneNumbers: string[], emails: string[] }

export type FeatureConfig = { features: Feature[] }

export type CategoryConfig = { categories: Category[] /* { subsection: CategorySubsection[] } */ }

export type Product = {
  id: string,
  image: string,
  name: string,
  price: number,
  discountPrice?: number,
  inStock: boolean,
  brand: number,
  category: string,
  subCategory: string,
}

export type Brand = {
  id: number,
  name: string,
  logo: string,
  heroImage: string,
  bannerImage: string
}

export type Image = { src: string, alt: string }

export type HeroConfig = {
  images: Image[]
}