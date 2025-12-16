import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { EditableProfileCard } from './EditableProfileCard';

const meta = {
  title: 'features/editableProfileCard/EditableProfileCard',
  component: EditableProfileCard,
} satisfies Meta<typeof EditableProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    id: '1',
  },
};
