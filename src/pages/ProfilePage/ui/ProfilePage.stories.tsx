import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { StoreDecorator, ThemeDecorator } from '@/shared/config/storybook';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import avatar from '@/shared/assets/tests/storybook.jpg';
import ProfilePage from './ProfilePage';
import { Theme } from '@/shared/const/theme';

const meta = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({
      profile: {
        form: {
          username: 'admin',
          country: Country.Russia,
          currency: Currency.RUB,
          age: 26,
          city: 'Moscow',
          lastname: 's',
          firstname: 'Hamres',
          avatar,
        },
      },
    }),
  ],
};

export const Dark: Story = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
      profile: {
        form: {
          username: 'admin',
          country: Country.Russia,
          currency: Currency.RUB,
          age: 26,
          city: 'Moscow',
          lastname: 's',
          firstname: 'Hamres',
          avatar,
        },
      },
    }),
  ],
};
