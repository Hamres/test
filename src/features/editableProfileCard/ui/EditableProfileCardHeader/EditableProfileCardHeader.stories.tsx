import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { EditableProfileCardHeader } from './EditableProfileCardHeader';

const meta = {
  title: 'features/editableProfileCard/EditableProfileCardHeader',
  component: EditableProfileCardHeader,
} satisfies Meta<typeof EditableProfileCardHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
