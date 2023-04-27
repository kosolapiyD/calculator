import { createContext, useState } from 'react';

export const ThemeContext = createContext<any>({
  theme: 'first-theme',
  undefined,
});

export const ThemeProvider = ({ children }: any) => {
  // local storage
  const [theme, setTheme] = useState('first-theme');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
