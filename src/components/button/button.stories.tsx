import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./button";
import { useState } from "react";

const meta = {
  title: "Components/Button",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const DefaultAction: Story = {
  args: {
    onClick: () => {
      alert("Success!");
    },
    children: <>Trigger alert</>,
  },
};

export const PromiseAction: Story = {
  render: function ButtonWithPromise() {
    const [pending, setPending] = useState(false);
    return (
      <Button
        pending={pending}
        onClick={async () =>
          new Promise((resolve) => {
            setPending(true);
            setTimeout(() => {
              setPending(false);
              alert("Success after 1 second");
              resolve();
            }, 1000);
          })
        }
      >
        Trigger delayed alert
      </Button>
    );
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    onClick: () => {
      alert("Should not be able to trigger this when disabled");
    },
    children: <>Trigger alert</>,
  },
};

export const Pending: Story = {
  args: {
    pending: true,
    onClick: () => {
      alert("Should not be able to trigger this when pending");
    },
    children: <>Trigger alert</>,
  },
};
