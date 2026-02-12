import React, { ReactNode, useEffect, useMemo, useState } from 'react';
import { Theme } from '@/shared/const/theme';
import { ThemeContext } from '../../../../shared/lib/context/ThemeContext';
import { useJsonSettings } from '@/entities/User';

// const getInitialTheme = (): Theme => {
//   const saved = localStorage.getItem(LOCAL_STORAGE_THEME_KEY);
//   return (saved as Theme) || Theme.LIGHT;
// };

interface ThemeProviderProps {
  initialTheme?: Theme;
  children: ReactNode;
}

const ThemeProvider = (props: ThemeProviderProps) => {
  const { initialTheme, children } = props;
  // const [theme, setTheme] = useState<Theme>(getInitialTheme());
  const { theme: defaultTheme = Theme.LIGHT } = useJsonSettings();
  const [isThemeInited, setIsThemeInited] = useState(false);

  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

  useEffect(() => {
    if (!isThemeInited) {
      setTheme(defaultTheme);
      setIsThemeInited(true);
    }
  }, [defaultTheme, isThemeInited]);

  // Эффект: синхронизация DOM и localStorage
  // useEffect(() => {
  //   document.body.classList.remove(Theme.LIGHT, Theme.DARK, Theme.ORANGE);
  //   document.body.classList.add(theme);
  //   localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
  // }, [theme]);

  // const value = useMemo(() => ({ theme, setTheme }), [theme]);

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
