import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary = {
  args: {
    variant: 'default',
    tone: 'primary',
    as: 'button',
    size: 'md',
  },
  render: (args) => (
    <Button {...args}>Primary button</Button>
  ),
} satisfies Story;

export const Outline = {
  args: {
    variant: 'outline',
    tone: 'primary',
    as: 'button',
    size: 'md',
  },
  render: (args) => (
    <Button {...args}>Outline button</Button>
  ),
} satisfies Story;

export const Plain = {
  args: {
    variant: 'plain',
    tone: 'primary',
    as: 'button',
    size: 'md',
  },
  render: (args) => <Button {...args}>Plain button</Button>,
} satisfies Story;
