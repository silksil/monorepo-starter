"use client";

import Link from "next/link";
import { Button } from "ui";
import { GitHub } from "ui/icons";
import { z } from "zod";
import { siteConfig } from "@/config/site";

const Homepage = () => {
  return (
    <div className="container flex flex-col md:flex-row gap-24 py-8 pt-6 md:py-12">
      <section className="md:basis-1/2">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl mb-3">
            Save time on project setup. Ship apps fast.
          </h1>
          <p className="text-lg text-muted-foreground">
            The starter pack built on top-notch technologies that enables you to
            focus on business logic instead of complex project setup.
          </p>
        </div>

        <div className="my-16"></div>

        <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
          <Button>
            <GitHub className="mr-2 h-4 w-4" />
            Click me
          </Button>
        </Link>
      </section>
    </div>
  );
};

export default Homepage;
