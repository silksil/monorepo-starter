import { cn } from "../lib/utils";

export const TopNavbar = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        className
      )}
    >
      <div
        className={cn(
          "container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0"
        )}
      >
        {children}
      </div>
    </header>
  );
};
