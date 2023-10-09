"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { RHFInputText, SubmitButton } from "ui";
import { cn } from "ui/lib/utils";
import { z } from "zod";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const schema = z.object({
  email: z.string().email(),
  password: z.string(),
});

type FormData = z.infer<typeof schema>;

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const formMethods = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { handleSubmit } = formMethods;

  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  async function onSubmit(data: FormData) {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <div className="grid gap-2">
        <div className="grid gap-1">
          <FormProvider {...formMethods}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <RHFInputText label="Email" name="email" />
              <RHFInputText label="Password" name="password" />
              <SubmitButton className="w-full" isLoading={isLoading}>
                Register
              </SubmitButton>
            </form>
          </FormProvider>
        </div>
      </div>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      {/* <Button variant="outline" type="button" disabled={isLoading}>
        {isLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.gitHub className="mr-2 h-4 w-4" />
        )}{" "}
        Github
      </Button> */}
    </div>
  );
}
