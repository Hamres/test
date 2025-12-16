module.exports = (layer, componentName) => `import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { ${componentName} } from './${componentName}';

const meta = {
  title: 'shared/${NAME}',
  component: ${NAME},
} satisfies Meta<typeof ${NAME}>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {

  },
};`;
