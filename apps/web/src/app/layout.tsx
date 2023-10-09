import { Metadata } from "next";
import { TailwindIndicator } from "ui";
import { fontSans } from "ui/lib/fonts";
import { cn } from "ui/lib/utils";
import Providers from "./Providers";
import "ui/styles/globals.css";
import { siteConfig } from "../config/site";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
  modal: React.ReactNode;
}

const RootLayout = async ({ children, modal }: RootLayoutProps) => (
  <html lang="en" suppressHydrationWarning>
    <head />
    <body
      className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable
      )}
    >
      <Providers>{children}</Providers>
    </body>
  </html>
);

export default RootLayout;
