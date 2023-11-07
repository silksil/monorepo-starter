import { Home, Icon, Menu, User, User2 } from "lucide-react";

export type NavigationItem = {
  name: string;
  href: string;
  icon: Icon;
};

export const dashboardNavItems: NavigationItem[] = [
  { name: "Analytics", href: "/analytics", icon: User },
  { name: "Settings", href: "#", icon: User2 },
];

export const mainNavItems: NavigationItem[] = [
  { name: "Home", href: "/", icon: Home },
  { name: "Dashboard", href: "/analytics", icon: Menu },
  { name: "Register", href: "/register", icon: User },
];
