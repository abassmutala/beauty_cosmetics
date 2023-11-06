import { MainNavConfig } from "../types"

export const mainNavConfig: MainNavConfig = {
  mainNavLinks: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Face",
      href: "/category/face",
    },
    {
      title: "Body",
      href: "/category/body",
    },
    {
      title: "Hair",
      href: "/category/hair",
    },
    {
      title: "Fragrance",
      href: "/category/fragrance",
    },
  ],
  mainNavActionLinks: [
    {
      icon: "person",
      name: "Account",
    },
    {
      icon: "search",
      name: "Search",
    },
    {
      icon: "bag",
      name: "Bag",
    },
  ]
}
