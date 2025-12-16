import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Button } from '../Button/Button';

import { Dropdown } from './Dropdown';

const meta = {
  title: 'shared/Dropdown',
  component: Dropdown,
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    trigger: <Button>Open</Button>,
    items: [
      { content: 'first' },
      { content: 'second' },
      { content: 'third' },
    ],
  },
};
