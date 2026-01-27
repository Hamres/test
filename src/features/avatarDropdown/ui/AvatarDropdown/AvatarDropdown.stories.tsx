import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { AvatarDropdown } from './AvatarDropdown';
import { StoreDecorator } from '@/shared/config/storybook';
import { UserRole } from '@/entities/User';

const meta = {
  title: 'features/AvatarDropdown',
  component: AvatarDropdown,
} satisfies Meta<typeof AvatarDropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
  decorators: [StoreDecorator({ user: { authData: { id: '1', roles: [UserRole.ADMIN], username: 'admin', avatar: '' }, _inited: true } })],
};
