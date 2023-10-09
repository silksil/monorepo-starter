import { Spinner } from "../../icons/Spinner";
import { Button, ButtonProps } from "../Button";

interface SubmitButtonProps extends ButtonProps {
  isLoading?: boolean;
}

export function SubmitButton({
  isLoading,
  disabled,
  children,
  size = "default",
  ...props
}: SubmitButtonProps) {
  return (
    <Button type="submit" disabled={disabled || isLoading} {...props}>
      {isLoading ? <Spinner /> : <>{children}</>}
    </Button>
  );
}
