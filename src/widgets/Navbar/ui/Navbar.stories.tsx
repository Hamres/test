import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook';
import { Navbar } from './Navbar';
import { Theme } from '@/shared/const/theme';

const meta = {
  title: 'widgets/Navbar',
  component: Navbar,
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
  decorators: [StoreDecorator({})],
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
};

export const AuthNavbar: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({
    user: { authData: {} },
  })],
};
