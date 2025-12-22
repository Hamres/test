import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { NotificationItem } from './NotificationItem';

const meta = {
  title: 'shared/NotificationItem',
  component: NotificationItem,
} satisfies Meta<typeof NotificationItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    item: {
      id: '1',
      title: 'awdadawd',
      description: '123123123',
    },
  },
};
