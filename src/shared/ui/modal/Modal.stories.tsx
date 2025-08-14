import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

const meta = {
  title: 'shared/Modal',
  component: Modal,
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
      + 'Ad alias dolorum explicabo ipsum molestiae nihil numquam perferendis reprehenderit voluptatem voluptates.',
  },
};

export const Dark: Story = {
  args: {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
      + 'Ad alias dolorum explicabo ipsum molestiae nihil numquam perferendis reprehenderit voluptatem voluptates.',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
