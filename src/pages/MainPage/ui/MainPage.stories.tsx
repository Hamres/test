import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { StoreDecorator, ThemeDecorator } from '@/shared/config/storybook';
import MainPage from './MainPage';
import { Theme } from '@/shared/const/theme';

const meta = {
  title: 'pages/MainPage',
  component: MainPage,
  decorators: [StoreDecorator({})],
} satisfies Meta<typeof MainPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
