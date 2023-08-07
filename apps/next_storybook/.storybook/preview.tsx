import React from "react";
import type { Preview } from "@storybook/react";
import "../global.css";
import Head from "next/head";
import { fontSans } from "ui/lib/fonts";
import { cn } from "ui/lib/utils";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <main
          className={cn(
            "min-h-screen bg-slate-500 font-sans antialiased",
            fontSans.variable
          )}
        >
          <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossOrigin=""
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
              rel="stylesheet"
            />
          </Head>
          {/* eslint-disable-next-line */}
          {/* @ts-ignore */}
          <Story />
        </main>
      );
    },
  ],
};

export default preview;
