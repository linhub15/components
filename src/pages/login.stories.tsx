import type { Meta, StoryObj } from "@storybook/react";

import { Login } from "./login";

const meta = {
  component: Login,
} satisfies Meta<typeof Login>;

export default meta;
type Story = StoryObj<typeof Login>;

export const primary: Story = {
  args: {
    thing: "hi",
  },
};
