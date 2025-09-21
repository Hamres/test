import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import avatar from 'shared/assets/tests/storybook.jpg';
import { ProfileCard } from './ProfileCard';

const meta = {
  title: 'entities/ProfileCard',
  component: ProfileCard,
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    data: {
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
};

export const withError: Story = {
  args: {
    error: 'true',
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};
