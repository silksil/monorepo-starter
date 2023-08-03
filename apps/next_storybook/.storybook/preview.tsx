import React from "react";
import type { Preview } from "@storybook/react";
import "../global.css";
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
        <div
          className={cn(
            "bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          {/* @ts-ignore */}
          <Story />
        </div>
      );
    },
  ],
};

export default preview;
