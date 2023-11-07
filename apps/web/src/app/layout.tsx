import { Metadata } from "next";
import { TailwindIndicator, Toaster } from "ui";
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

const RootLayout = async ({ children, modal }: RootLayoutProps) => {
  return (
    // Until next-themes fixes SSR, the 'suppressHydrationWarning' prop is needed.
    // https://github.com/pacocoursey/next-themes/issues/169
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers>
          <div className="relative flex min-h-screen flex-col">
            <div className="flex-1 relative isolate">
              {children}
              {modal}
            </div>
          </div>
          <Toaster />
          <TailwindIndicator />
        </Providers>
        <TailwindIndicator />
      </body>
    </html>
  );
};

export default RootLayout;
