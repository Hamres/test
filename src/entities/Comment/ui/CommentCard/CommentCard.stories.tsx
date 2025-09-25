import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { CommentCard } from './CommentCard';

const meta = {
  title: 'entities/Comment/CommentCard',
  component: CommentCard,
} satisfies Meta<typeof CommentCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    comment: {
      id: '1',
      text: '666',
      user: { id: '1', username: 'patris' },
    },
  },
};

export const Loading: Story = {
  args: {
    comment: {
      id: '1',
      text: '666',
      user: { id: '1', username: 'patris' },
    },
    isLoading: true,
  },
};
