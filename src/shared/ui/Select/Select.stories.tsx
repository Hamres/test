import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Select } from './Select';

const meta = {
  title: 'shared/Select',
  component: Select,
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'text',
    options: [
      { value: '123', content: 'first value' },
      { value: '1234', content: 'second value' },
    ],
  },
};
