import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { classNames } from 'shared/lib/classNames/classNames';
import cls from 'shared/ui/Code/Code.module.scss';
import React, { Suspense } from 'react';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { AppRouter } from 'app/providers/router';
import { Code } from './Code';

const meta = {
  title: 'shared/Code',
  component: Code,
} satisfies Meta<typeof Code>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: 'export default {\n'
      + '    title: \'shared/Code\',\n'
      + '    component: Code,\n'
      + '    argTypes: {\n'
      + '        backgroundColor: { control: \'color\' },\n'
      + '    },\n'
      + '} as ComponentMeta<typeof Code>;\n'
      + '\n'
      + 'const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;\n'
      + '\n'
      + 'export const Normal = Template.bind({});',
  },
};
