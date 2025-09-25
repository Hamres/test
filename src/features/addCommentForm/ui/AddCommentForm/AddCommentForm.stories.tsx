import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { action } from 'storybook/actions';
import { StoreDecorator } from 'shared/config/storybook';
import AddCommentForm from './AddCommentForm';

const meta = {
  title: 'features/AddCommentForm',
  component: AddCommentForm,
} satisfies Meta<typeof AddCommentForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    onSendComment: action('onSendComment'),
  },
  decorators: [StoreDecorator({})],
};
