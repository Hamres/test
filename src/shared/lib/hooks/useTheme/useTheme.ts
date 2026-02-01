// shared/hooks/useTheme.ts
import { useContext } from 'react';
import { Theme } from '@/shared/const/theme';
// eslint-disable-next-line test-eslint-plugin-v1/path-checker
import { ThemeContext } from '@/shared/lib/context/ThemeContext';

interface UseThemeResult {
  toggleTheme?: () => void;
  theme?: Theme;
}

export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const currentTheme = theme ?? Theme.LIGHT;

    let newTheme: Theme;
    switch (currentTheme) {
      case Theme.LIGHT:
        newTheme = Theme.ORANGE;
        break;
      case Theme.ORANGE:
        newTheme = Theme.DARK;
        break;
      case Theme.DARK:
        newTheme = Theme.LIGHT;
        break;
      default:
        newTheme = Theme.LIGHT;
    }

    // Проверка на существование setTheme
    if (setTheme) {
      setTheme(newTheme);
    } else {
      console.error('ThemeContext не инициализирован. setTheme отсутствует.');
    }
  };

  return { theme: theme ?? Theme.LIGHT, toggleTheme };
}
