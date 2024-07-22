import type { Meta, StoryObj } from '@storybook/react';
import Text from '@/components/Text';

const meta = {
  title: 'Components/Text',
  component: Text,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    as: {
      control: 'select',
      options: ['p', 'h1', 'h2', 'h3', 'span'],
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'p',
        },
      },
    },
    variant: {
      control: 'select',
      options: ['small', 'p', 'h1', 'h2', 'h3'],
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'p',
        },
      },
    },
    tone: {
      control: 'select',
      options: [
        'default',
        'primary',
        'danger',
        'success',
        'warning',
      ],
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'p',
        },
      },
    },
    fontWeight: {
      control: 'select',
      options: [
        'light',
        'normal',
        'medium',
        'semiBold',
        'undefined',
      ],
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'undefined',
        },
      },
    },
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof Text>;

export const HeadingLevel1 = {
  args: {
    variant: 'h1',
    as: 'h1',
  },
  render: (args) => (
    <Text {...args}>Heading Level 1 - H1</Text>
  ),
} satisfies Story;

export const HeadingLevel2 = {
  args: {
    variant: 'h2',
    as: 'h2',
  },
  render: (args) => (
    <Text {...args}>Heading Level 2 - H2</Text>
  ),
} satisfies Story;

export const HeadingLevel3 = {
  args: {
    variant: 'h3',
    as: 'h3',
  },
  render: (args) => (
    <Text {...args}>Heading Level 3 - H3</Text>
  ),
} satisfies Story;

export const Paragraph = {
  args: {},
  render: (args) => <Text {...args}>Paragraph</Text>,
} satisfies Story;

export const Caption = {
  args: {
    variant: 'small',
    as: 'p',
  },
  render: (args) => <Text {...args}>Primary</Text>,
} satisfies Story;

export const Primary = {
  args: {
    variant: 'p',
    as: 'p',
    tone: 'primary',
  },
  render: (args) => <Text {...args}>Caption</Text>,
} satisfies Story;

export const Success = {
  args: {
    variant: 'p',
    as: 'p',
    tone: 'success',
  },
  render: (args) => <Text {...args}>Success</Text>,
} satisfies Story;

export const Warning = {
  args: {
    variant: 'p',
    as: 'p',
    tone: 'warning',
  },
  render: (args) => <Text {...args}>Warning</Text>,
} satisfies Story;

export const Danger = {
  args: {
    variant: 'p',
    as: 'p',
    tone: 'danger',
  },
  render: (args) => <Text {...args}>Danger</Text>,
} satisfies Story;
