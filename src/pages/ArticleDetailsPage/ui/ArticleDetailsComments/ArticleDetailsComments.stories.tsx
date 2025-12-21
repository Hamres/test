import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { StoreDecorator } from 'shared/config/storybook';
import { ArticleDetailsComments } from './ArticleDetailsComments';

const meta = {
  title: 'pages/ArticleDetailsPage/ArticleDetailsComments',
  component: ArticleDetailsComments,
} satisfies Meta<typeof ArticleDetailsComments>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    id: '1',
  },
  decorators: [StoreDecorator({})],
};
