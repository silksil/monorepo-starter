import { ReactNode } from "react";
import { cn } from "../../lib/utils";

type FieldErrorProps = {
  children: ReactNode;
  className?: string;
};

export function FieldErrorText({ children, className }: FieldErrorProps) {
  return (
    <div className={cn("text-sm text-red-600", className)}>{children}</div>
  );
}
