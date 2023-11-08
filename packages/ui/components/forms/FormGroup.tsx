import { ElementType, ReactNode } from "react";
import { cn } from "../../lib/utils";

export const FormGroup = ({
  children,
  className,
  as: Component = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}) => (
  // @ts-ignore: TODO:: fix this later.
  <Component className={cn("mb-6 flex flex-col space-y-2", className)}>
    {children}
  </Component>
);
