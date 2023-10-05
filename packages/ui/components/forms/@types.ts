import { ReactNode } from "react";

export type FormInputProps = {
  id?: string;
  name: string;
  label: ReactNode;
  labelSrOnly?: boolean;
  placeholder?: string;
  helperText?: string;
  className?: string;
};
