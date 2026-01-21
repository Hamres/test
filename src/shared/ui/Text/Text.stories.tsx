import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { ThemeDecorator } from '@/shared/config/storybook';
import { Text, TextSize, TextTheme } from './Text';
import { Theme } from '@/shared/const/theme';

const meta = {
  title: 'shared/Text',
  component: Text,
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'Title lorem ipsun',
    text: 'Description Description Description Description',
  },
};

export const Error: Story = {
  args: {
    title: 'Title lorem ipsun',
    text: 'Description Description Description Description',
    theme: TextTheme.ERROR,
  },
};

export const OnlyTitle: Story = {
  args: {
    title: 'Title lorem ipsun',
  },
};

export const OnlyText: Story = {
  args: {
    text: 'Description Description Description Description',
  },
};

export const PrimaryDark: Story = {
  args: {
    title: 'Title lorem ipsun',
    text: 'Description Description Description Description',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const OnlyTitleDark: Story = {
  args: {
    title: 'Title lorem ipsun',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const OnlyTextDark: Story = {
  args: {
    text: 'Description Description Description Description',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const SizeL: Story = {
  args: {
    title: 'Title lorem ipsun',
    text: 'Description Description Description Description',
    size: TextSize.L,
  },
};

export const SizeM: Story = {
  args: {
    title: 'Title lorem ipsun',
    text: 'Description Description Description Description',
    size: TextSize.M,
  },
};

export const SizeS: Story = {
  args: {
    title: 'Title lorem ipsun',
    text: 'Description Description Description Description',
    size: TextSize.S,
  },
};
