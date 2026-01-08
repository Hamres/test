import '@/app/styles/index.scss';
import type { Decorator } from '@storybook/react';
import { Theme, ThemeProvider } from '@/app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme): Decorator => (story) => (
  <ThemeProvider initialTheme={theme}>
    <div className={`app ${theme}`}>
      {story()}
    </div>
  </ThemeProvider>
);
