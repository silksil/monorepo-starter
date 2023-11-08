import Image from "next/image";
import { siteConfig } from "@/config/site";
import "ui/styles/globals.css";
import { Logo } from "../_components/Logo";

interface RootLayoutProps {
  children: React.ReactNode;
  modal: React.ReactNode;
}

const AuthLayout = async ({ children }: RootLayoutProps) => (
  <>
    <div className="container relative h-[100vh] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
        <div className="absolute inset-0 bg-zinc-900" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <Logo hasLink={true} />
          {siteConfig.name}
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo;This starter template has saved us countless hours of work
              and helped us deliver stunning designs faster than ever
              before.&rdquo;
            </p>
            <footer className="text-sm">Client X</footer>
          </blockquote>
        </div>
      </div>
      <div className="pt-14 md:pt-0lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          {children}
        </div>
      </div>
    </div>
  </>
);

export default AuthLayout;
