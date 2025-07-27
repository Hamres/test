import 'app/styles/index.scss';
import type { Decorator } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme): Decorator => (story) => (
  <div className={`app ${theme}`}>
    {story()}
  </div>
);
