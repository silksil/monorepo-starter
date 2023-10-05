import { forwardRef } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils";
import { FieldErrorText, FieldHelperText } from "..";
import { FormInputProps } from "../@types";
import { FormGroup } from "../FormGroup";
import { Input, Label } from "../inputs";
import { InputProps } from "../inputs/Input";

type RHFInputProps = FormInputProps & InputProps;

export const RHFInput = forwardRef<HTMLInputElement, RHFInputProps>(
  (
    { label, id = "", name, className, helperText, type = "text", ...other },
    ref
  ) => {
    const { control } = useFormContext();

    if (!id) {
      id = name;
    }

    return (
      <FormGroup className={className}>
        <Label htmlFor={id}>{label}</Label>
        <Controller
          name={name}
          control={control}
          render={({
            field: { value, onChange, onBlur },
            fieldState: { error },
          }) => (
            <>
              <Input
                type={type}
                id={id}
                onBlur={onBlur}
                onChange={(val) =>
                  onChange(
                    type === "number"
                      ? Number(val.target.value)
                      : val.target.value
                  )
                }
                value={value || ""}
                className={cn(
                  {
                    "border-red-600": error,
                  },
                  className
                )}
                ref={ref}
                {...other}
              />
              {error && <FieldErrorText>{error?.message}</FieldErrorText>}
              {!error && helperText && (
                <FieldHelperText> {helperText}</FieldHelperText>
              )}
            </>
          )}
        />
      </FormGroup>
    );
  }
);
