import Link from "next/link";
import { Menu, Twitter, User, User2 } from "lucide-react";
import { buttonVariants } from "ui";
import { cn } from "ui/lib/utils";
import { siteConfig } from "@/config/site";
import { getPathnameInServer } from "@/app/_utils/router";
import { Logo } from "../Logo";
import { ThemeToggle } from "../ThemeToggle";
import { SidebarNavigation } from "./SidebarNavigation";
import { TopNavbar } from "./TopNavBar";

export const Navbar = () => {
  const contentRight = () => {
    return (
      <nav className="flex items-center space-x-1">
        <Link href={siteConfig.links.twitter} target="_blank" rel="noreferrer">
          <div
            className={buttonVariants({
              size: "sm",
              variant: "ghost",
            })}
          >
            <Twitter className="h-5 w-5 fill-current" />
            <span className="sr-only">Twitter</span>
          </div>
        </Link>
        <ThemeToggle />
      </nav>
    );
  };

  const contentLeft = () => {
    const pathname = getPathnameInServer();

    const getIsActive = (href: string) => {
      return pathname === href;
    };

    return (
      <div className="flex gap-6 md:gap-10">
        <Link href="/" className="hidden items-center space-x-2 md:flex">
          <Logo />
          <span className="hidden font-bold sm:inline-block">
            {siteConfig.name}
          </span>
        </Link>
        {siteConfig.mainNav?.length ? (
          <nav className="hidden gap-6 md:flex ml-10">
            {siteConfig.mainNav?.map((item, index) => {
              const active = getIsActive(item.href);

              return (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center text-lg font-semibold text-muted-foreground sm:text-sm hover:text-foreground",
                    {
                      "text-foreground": active,
                    }
                  )}
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>
        ) : null}

        <SidebarNavigation className="md:hidden" />
      </div>
    );
  };

  return (
    <TopNavbar>
      <div className="flex gap-6 md:gap-10">{contentLeft()}</div>
      <div className="flex flex-1 items-center justify-end space-x-4">
        {contentRight()}
      </div>
    </TopNavbar>
  );
};
