import { Menu, Twitter, User, User2 } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "ui";
import { cn } from "ui/lib/utils";
import { mainNavItems } from "@/config/nav";
import { Logo } from "../Logo";
import { NavigationItems } from "./NavigationItems";

export const SidebarNavigation = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex", className)}>
      <Sheet>
        <SheetContent side="left">
          <SheetHeader>
            <Logo className="mb-4" />
          </SheetHeader>
          <nav>
            <NavigationItems items={mainNavItems} />
          </nav>
        </SheetContent>
        <SheetTrigger asChild>
          <button type="button">
            <span className="sr-only">Open sidebar</span>
            <Menu />
          </button>
        </SheetTrigger>
      </Sheet>
    </div>
  );
};
