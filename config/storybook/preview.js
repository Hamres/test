import { withThemeByClassName } from '@storybook/addon-themes';
import {
  RouterDecorator,
  StyleDecorator,
  SuspenseDecorator,
  ThemeDecorator,
} from '../../src/shared/config/storybook';
import { Theme } from '../../src/shared/const/theme';

import '../../src/app/styles/themes/dark.scss';
import '../../src/app/styles/themes/orange.scss';
// import '../../src/app/styles/themes/light.scss';

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
      StyleDecorator,
      ThemeDecorator(Theme.LIGHT),
      RouterDecorator,
      SuspenseDecorator,

      withThemeByClassName({
        themes: {
          dark: 'app_dark_theme',
          orange: 'app_orange_theme',
          // light: 'app_light_theme',
        },
        defaultTheme: 'dark',
        classNameTarget: 'body',
        clearDefaultClass: true,
      }),
    ],
};

export default preview;

// themes: {
// default: 'light',
//     list: [
//     { name: 'Light', class: Theme.LIGHT, color: '#fff' },
//     { name: 'Dark', class: Theme.DARK, color: '#000' },
//     { name: 'Orange', class: Theme.ORANGE, color: '#e28822' },
//   ],
// },
