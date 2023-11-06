import { Metadata } from "next";
import Link from "next/link";
import { Menu, User, User2 } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "ui";
import { cn } from "ui/lib/utils";
import { Logo } from "../_components/Logo";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};

const navigation = [
  { name: "Analytics", href: "/analytics", icon: User, current: true },
  { name: "Settings", href: "#", icon: User2, current: false },
];
const teams = [
  { id: 1, name: "Finance", href: "#", initial: "F", current: false },
  { id: 2, name: "Marketing", href: "#", initial: "M", current: false },
];

const NavigationItems = ({ items }: { items: typeof navigation }) => {
  return (
    <ul role="list" className="-mx-2 space-y-1">
      {items.map((item) => (
        <li key={item.name}>
          <Link
            href={item.href}
            className={cn(
              item.current
                ? "bg-muted"
                : "text-muted-foreground hover:text-foreground hover:bg-muted",
              "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
            )}
          >
            <item.icon
              className={cn(
                item.current
                  ? "text-primary"
                  : "text-muted-foreground group-hover:text-foreground",
                "h-6 w-6 shrink-0"
              )}
              aria-hidden="true"
            />
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const NavigationItemsInitials = ({ items }: { items: typeof teams }) => {
  return (
    <ul role="list" className="-mx-2 mt-2 space-y-1">
      {items.map((item) => (
        <li key={item.name}>
          <Link
            href={item.href}
            className={cn(
              item.current
                ? "bg-muted text-primary"
                : "text-muted-foreground hover:text-foreground hover:bg-muted",
              "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
            )}
          >
            <span
              className={cn(
                item.current
                  ? "text-primary border-primary"
                  : "text-muted-foreground border group-hover:border-primary group-hover:text-foreground",
                "flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium "
              )}
            >
              {item.initial}
            </span>
            <span className="truncate">{item.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

const DashboardDesktop = () => {
  return (
    <>
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r  px-6">
          <div className="flex h-16 shrink-0 items-center">
            <Logo />
          </div>
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <NavigationItems items={navigation} />
              </li>
              <li>
                <div className="text-xs font-semibold leading-6 text-muted-foreground">
                  Your teams
                </div>
                <NavigationItemsInitials items={teams} />
              </li>
              <li className="-mx-6 mt-auto">
                <Link
                  href="#"
                  className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 hover:bg-muted"
                >
                  <Avatar>
                    <AvatarFallback />
                    <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
                  </Avatar>
                  <span className="sr-only">Your profile</span>
                  <span aria-hidden="true">Tom Cook</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

const DashboardMobile = () => {
  return (
    <>
      <Sheet>
        <SheetContent side="left">
          <SheetHeader>
            <Logo className="mb-4" />
            <NavigationItems items={navigation} />
            <div className="text-xs font-semibold leading-6 text-muted-foreground pt-4 text-left">
              Your teams
            </div>
            <NavigationItemsInitials items={teams} />
          </SheetHeader>
        </SheetContent>

        <div className="sticky top-0 z-40 flex items-center gap-x-6  px-4 py-4 shadow-sm sm:px-6 lg:hidden">
          <SheetTrigger asChild>
            <button type="button" className="-m-2.5 p-2.5 lg:hidden">
              <span className="sr-only">Open sidebar</span>
              <Menu />
            </button>
          </SheetTrigger>
          <div className="flex-1" />
          <Link href="#">
            <span className="sr-only">Your profile</span>
            <Avatar>
              <AvatarFallback />
              <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
            </Avatar>
          </Link>
        </div>
      </Sheet>
    </>
  );
};

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <DashboardDesktop />
      <DashboardMobile />
      <main className="py-10 lg:pl-72">
        <div className="px-4 sm:px-6 lg:px-8 lg:py-12">{children}</div>
      </main>
    </>
  );
}