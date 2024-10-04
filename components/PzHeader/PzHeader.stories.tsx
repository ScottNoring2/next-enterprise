import type { Meta, StoryObj } from "@storybook/react"
import Header from "./Header"

const meta: Meta<typeof Header> = {
  title: "Header",
  component: Header,
  args: {
    intent: "primary",
    children: "Header"
  },
  argTypes: {
    intent: {
      options: ["primary", "secondary"],
      control: { type: "select" },
    }
  },
}

type Story = StoryObj<typeof Header>

export const Default: Story = {
  render: (args) => <Header {...args} />,
}

export default meta
