// import { withThemeByClassName } from '@storybook/addon-themes';
// import {
//   RouterDecorator,
//   StyleDecorator,
//   SuspenseDecorator,
// } from '../../src/shared/config/storybook';
//
// import '../../src/app/styles/themes/dark.scss';
// import '../../src/app/styles/themes/orange.scss';
// import '../../src/app/styles/themes/light.scss';
//
// const preview = {
//   parameters: {
//     controls: {
//       matchers: {
//         color: /(background|color)$/i,
//         date: /Date$/i,
//       },
//     },
//     layout: 'fullscreen',
//   },
//   decorators: [
//     withThemeByClassName({
//       themes: {
//         dark: 'app_dark_theme',
//         orange: 'app_orange_theme',
//         light: 'app_light_theme',
//       },
//       defaultTheme: 'dark',
//       classNameTarget: 'body',
//       clearDefaultClass: true,
//     }),
//
//     StyleDecorator,
//     // ThemeDecorator(Theme.LIGHT),
//     RouterDecorator,
//     SuspenseDecorator,
//   ],
// };
//
// export default preview;

import { addDecorator } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { SuspenseDecorator } from '../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator';
import { Theme } from '../../src/shared/const/theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'fullscreen',
  themes: {
    default: 'light',
    list: [
      { name: 'light', class: Theme.LIGHT, color: '#ffffff' },
      { name: 'dark', class: Theme.DARK, color: '#000000' },
      { name: 'orange', class: Theme.ORANGE, color: '#ffb005' },
    ],
  },
};

addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(RouterDecorator);
addDecorator(SuspenseDecorator);
