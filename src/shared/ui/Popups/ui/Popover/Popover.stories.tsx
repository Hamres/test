import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { Popover } from './Popover';

const meta = {
  title: 'shared/Popover',
  component: Popover,
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    trigger: '1',
    direction: 'bottom left',
    children: '123123',
  },
};
