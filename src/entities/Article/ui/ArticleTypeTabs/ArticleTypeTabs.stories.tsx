import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { ArticleType } from '../../model/consts/articleConsts';

import { ArticleTypeTabs } from './ArticleTypeTabs';

const meta = {
  title: 'entities/Article/ArticleTypeTabs',
  component: ArticleTypeTabs,
} satisfies Meta<typeof ArticleTypeTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    value: ArticleType.ALL,
    onChangeType: () => {},
  },
};
