import type { Decorator } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
// eslint-disable-next-line test-eslint-plugin-v1/layer-imports
import { ThemeProvider } from '@/app/providers/ThemeProvider';

export const ThemeDecorator =
  (theme: Theme): Decorator =>
  (story) => (
    <ThemeProvider initialTheme={theme}>
      <div className={`app ${theme}`}>{story()}</div>
    </ThemeProvider>
  );
