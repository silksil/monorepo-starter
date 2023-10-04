import type { Meta, StoryObj } from "@storybook/react";
import { Input as InputComponent } from "ui";

const meta = {
  title: "Components/forms/Input",
  component: InputComponent,
  args: {
    placeholder: "Placeholder",
    value: "",
  },
} satisfies Meta<typeof InputComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Input: Story = {};
