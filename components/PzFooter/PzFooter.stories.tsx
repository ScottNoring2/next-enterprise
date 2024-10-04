import type { Meta, StoryObj } from "@storybook/react"
import Footer from "./Footer"

const meta: Meta<typeof Footer> = {
  title: "Footer",
  component: Footer,
  args: {
    intent: "primary",
    children: "Footer",
  },
  argTypes: {
    intent: {
      options: ["primary", "secondary"],
      control: { type: "select" },
    }
  },
}

type Story = StoryObj<typeof Footer>

export const Default: Story = {
  render: (args) => <Footer {...args} />,
}

export default meta
