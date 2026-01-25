import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { ArticleSortSelector } from './ArticleSortSelector';
import { ArticleSortField } from '@/entities/Article';

const meta = {
  title: 'entities/Article/ArticleSortSelector',
  component: ArticleSortSelector,
} satisfies Meta<typeof ArticleSortSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    order: 'asc',
    sort: ArticleSortField.VIEWS,
    onChangeOrder: () => {},
    onChangeSort: () => {},
  },
};
