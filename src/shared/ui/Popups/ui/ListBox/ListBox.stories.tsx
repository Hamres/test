import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { ListBox } from './ListBox';

const meta = {
  title: 'shared/Popups/ListBox',
  component: ListBox,
  decorators: [
    (Story) => <div style={{ padding: 100 }}><Story /></div>,
  ],
} satisfies Meta<typeof ListBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    value: '123',
    onChange: () => {},
    items: [
      { content: '123123123123', value: '123' },
      { content: 'sef3r2rtwf', value: '12334324' },
    ],
  },
};

export const topLeft: Story = {
  args: {
    value: '123',
    direction: 'top left',
    onChange: () => {},
    items: [
      { content: '123123123123', value: '123' },
      { content: 'sef3r2rtwf', value: '12334324' },
    ],
  },
};

export const topRight: Story = {
  args: {
    value: '123',
    direction: 'top right',
    onChange: () => {},
    items: [
      { content: '123123123123', value: '123' },
      { content: 'sef3r2rtwf', value: '12334324' },
    ],
  },
};

export const bottomLeft: Story = {
  args: {
    value: '123',
    direction: 'bottom left',
    onChange: () => {},
    items: [
      { content: '123123123123', value: '123' },
      { content: 'sef3r2rtwf', value: '12334324' },
    ],
  },
};

export const bottomRight: Story = {
  args: {
    value: '123',
    direction: 'bottom right',
    onChange: () => {},
    items: [
      { content: '123123123123', value: '123' },
      { content: 'sef3r2rtwf', value: '12334324' },
    ],
  },
};
