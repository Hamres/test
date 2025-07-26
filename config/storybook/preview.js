import { Theme } from '../../src/app/providers/ThemeProvider';
import { RouterDecorator, StyleDecorator, ThemeDecorator } from '../../src/shared/config/storybook';

/** @type { import('@storybook/react-webpack5').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [StyleDecorator, ThemeDecorator(Theme.LIGHT), RouterDecorator],
};

export default preview;
