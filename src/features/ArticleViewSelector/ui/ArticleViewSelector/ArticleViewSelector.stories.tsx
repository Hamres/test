import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { ArticleViewSelector } from './ArticleViewSelector';
import { ArticleView } from '@/entities/Article';

const meta = {
  title: 'entities/Article/ArticleViewSelector',
  component: ArticleViewSelector,
} satisfies Meta<typeof ArticleViewSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    view: ArticleView.BIG,
  },
};
