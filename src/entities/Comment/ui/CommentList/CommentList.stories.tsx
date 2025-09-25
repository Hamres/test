import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { CommentList } from './CommentList';

const meta = {
  title: 'entities/Comment/CommentList',
  component: CommentList,
} satisfies Meta<typeof CommentList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    comments: [
      {
        id: '1',
        text: '666',
        user: { id: '1', username: 'patris' },
      },
      {
        id: '2',
        text: '777',
        user: { id: '2', username: 'eeeeeeeee' },
      },
    ],
  },
};

export const Loading: Story = {
  args: {
    comments: [],
    isLoading: true,
  },
};
