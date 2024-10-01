import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { ThemeProvider as StyledThemeProvider, createGlobalStyle } from 'styled-components';

interface ThemeContextProps {
  theme: string;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

const lightTheme = {
  mode: 'light',
  background: '#ffffff',
  color: '#000000',
};

const darkTheme = {
  mode: 'dark',
  background: '#000000',
  color: '#ffffff',
};

const GlobalStyle = createGlobalStyle<{ theme: any }>`
  body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.color};
  }
`;

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyle theme={theme === 'light' ? lightTheme : darkTheme} />
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
