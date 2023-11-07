import { headers } from "next/headers";
import Link from "next/link";
import { cn } from "ui/lib/utils";
import { mainNavItems } from "@/config/nav";

export const NavigationItems = ({ items }: { items: typeof mainNavItems }) => {
  const pathname = headers().get("x-invoke-path") || "";
  const getIsActive = (href: string) => {
    return pathname === href;
  };
  return (
    <ul role="list" className="-mx-2 space-y-1">
      {items.map((item) => {
        const isActive = getIsActive(item.href);

        return (
          <li key={item.name}>
            <Link
              href={item.href}
              className={cn(
                isActive
                  ? "bg-muted"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted",
                "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
              )}
            >
              <item.icon
                className={cn(
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground group-hover:text-foreground",
                  "h-6 w-6 shrink-0"
                )}
                aria-hidden="true"
              />
              {item.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
