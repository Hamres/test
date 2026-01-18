import type { Meta, StoryObj } from '@storybook/react-webpack5';

import withMock from 'storybook-addon-mock';
import { NotificationList } from './NotificationList';
import { StoreDecorator } from '@/shared/config/storybook';

const meta = {
  title: 'entities/Notification/NotificationList',
  component: NotificationList,
  decorators: [withMock],
} satisfies Meta<typeof NotificationList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
  decorators: [StoreDecorator({})],
  parameters: {
    mockData: [
      {
        url: `${__API__}/notifications`,
        method: 'GET',
        status: 200,
        response: [
          {
            id: '1',
            title: 'notification',
            description: 'notification',
          },
          {
            id: '2',
            title: 'notification 2',
            description: 'notification',
          },
          {
            id: '3',
            title: 'notification 3',
            description: 'notification',
          },
        ],
      },
    ],
  },
};
