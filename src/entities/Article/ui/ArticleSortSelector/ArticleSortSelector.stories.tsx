import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { ArticleSortField } from '../../model/consts/articleConsts';

import { ArticleSortSelector } from './ArticleSortSelector';

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
