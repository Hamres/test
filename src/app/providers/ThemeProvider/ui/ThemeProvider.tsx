// shared/providers/ThemeProvider.tsx
import React, { ReactNode, useEffect, useMemo, useState } from 'react';
import { Theme } from '@/shared/const/theme';
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localstorage';
import { ThemeContext } from '@/shared/lib/context/ThemeContext';

const getInitialTheme = (): Theme => {
  const saved = localStorage.getItem(LOCAL_STORAGE_THEME_KEY);
  return (saved as Theme) || Theme.LIGHT;
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme());

  // Эффект: синхронизация DOM и localStorage
  useEffect(() => {
    document.body.classList.remove(Theme.LIGHT, Theme.DARK, Theme.ORANGE);
    document.body.classList.add(theme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
  }, [theme]);

  const value = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
