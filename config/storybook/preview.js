import {
  RouterDecorator,
  StyleDecorator,
  SuspenseDecorator,
  ThemeDecorator,
} from '../../src/shared/config/storybook';
import { Theme } from '../../src/shared/const/theme';

/** @type { import('@storybook/react-webpack5').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'fullscreen',
  },
  decorators: [StyleDecorator, ThemeDecorator(Theme.LIGHT), RouterDecorator, SuspenseDecorator],
};

export default preview;
