import React from "react";
import type { Preview } from "@storybook/react";
import "../global.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

const preview: Preview = {
  decorators: [
    (Story) => (
      <div className=" h-screen flex justify-center items-center">
        <div
          style={{ width: 400 }}
          className=" flex justify-center items-center"
        >
          <Story />
        </div>
      </div>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
