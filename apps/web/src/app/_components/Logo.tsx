import Link from "next/link";
import { cn } from "ui/lib/utils";

export const Logo = ({
  className,
  hasLink = false,
}: {
  className?: string;
  hasLink?: boolean;
}) => {
  const logo = (
    <svg
      className={cn("2 h-6 w-6", className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
    </svg>
  );

  if (!hasLink) return logo;

  return <Link href="/">{logo}</Link>;
};
