import type { Meta, StoryObj } from "@storybook/react"
import { PzButton } from "./PzButtonSubmit"

const meta: Meta<typeof PzButton> = {
  title: "Button",
  component: PzButton,
  args: {
    intent: "primary",
    underline: false,
    children: "Button",
    size: "lg",
  },
  argTypes: {
    intent: {
      options: ["primary", "secondary"],
      control: { type: "select" },
    },
    size: {
      options: ["sm", "lg"],
      control: { type: "select" },
    },
  },
}

type Story = StoryObj<typeof PzButton>

export const Default: Story = {
  render: (args) => <PzButton {...args} />,
}

export default meta
