export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Peakfijn",
  description: "The scalable monorepo and full-stack starter pack.",
  url: "turbo-starter-web.vercel.app",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Dashboard",
      href: "/analytics",
    },
    {
      title: "Register",
      href: "/register",
    },
  ],
  links: {
    twitter: "https://twitter.com/Peakfijn",
  },
};
