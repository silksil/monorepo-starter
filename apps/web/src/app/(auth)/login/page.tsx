import { Metadata } from "next";
import { PrivacyAndConditions } from "../_components/PrivacyAndConditions";
import { UserAuthForm } from "../_components/UserAuthForm";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};

export default function LoginPage() {
  return (
    <>
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Login</h1>
        <p className="text-sm text-muted-foreground">
          Enter your email and password below to login
        </p>
      </div>
      <UserAuthForm />
      <PrivacyAndConditions />
    </>
  );
}
