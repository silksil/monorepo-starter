import type { Meta, StoryObj } from "@storybook/react";
import { Button as ButtonComponent } from "ui";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Components/Buttons/Button",
  component: ButtonComponent,
  args: {
    children: "Click me",
  },
} satisfies Meta<typeof ButtonComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Button: Story = {};
