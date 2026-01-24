import { withThemeByClassName } from '@storybook/addon-themes';
import {
  RouterDecorator,
  StyleDecorator,
  SuspenseDecorator,
} from '../../src/shared/config/storybook';

import '../../src/app/styles/themes/dark.scss';
import '../../src/app/styles/themes/orange.scss';
import '../../src/app/styles/themes/light.scss';

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
  decorators:
    [

      withThemeByClassName({
        themes: {
          dark: 'app_dark_theme',
          orange: 'app_orange_theme',
          light: 'app_light_theme',
        },
        defaultTheme: 'dark',
        classNameTarget: 'body',
        clearDefaultClass: true,
      }),

      StyleDecorator,
      // ThemeDecorator(Theme.LIGHT),
      RouterDecorator,
      SuspenseDecorator,
    ],
};

export default preview;
