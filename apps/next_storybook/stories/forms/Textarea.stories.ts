import type { Meta, StoryObj } from "@storybook/react";
import { Textarea as TextareaComponent } from "ui";

const meta = {
  title: "Components/forms/Textarea",
  component: TextareaComponent,
  args: {
    placeholder: "Placeholder",
    value: "",
  },
} satisfies Meta<typeof TextareaComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Textarea: Story = {};
