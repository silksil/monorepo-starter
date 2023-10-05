import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type FieldErrorProps = {
  children: ReactNode;
  className?: string;
};

export function FieldHelperText({ children, className }: FieldErrorProps) {
  return <div className={cn("text-sm ", className)}>{children}</div>;
}
