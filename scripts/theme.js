import React, { createContext, useContext, useState, useEffect } from 'react';
import { useColorScheme } from 'react-native';

// Definindo as cores para os temas claro e escuro
const lightTheme = {
  background: '#ffffff',
  text: '#000000',
  primary: '#1e88e5',
  secondary: '#f5f5f5',
  codeBackground: '#f5f5f5',
  codeText: '#2c3e50',
};

const darkTheme = {
  background: '#121212',
  text: '#e0e0e0',
  primary: '#90caf9',
  secondary: '#1e1e1e',
  codeBackground: '#1e1e1e',
  codeText: '#c3e88d',
};

// Criando o contexto de tema
const ThemeContext = createContext();

// Provedor do tema
export const ThemeProvider = ({ children }) => {
  const systemTheme = useColorScheme();
  const [theme, setTheme] = useState(systemTheme === 'dark' ? darkTheme : lightTheme);

  useEffect(() => {
    setTheme(systemTheme === 'dark' ? darkTheme : lightTheme);
  }, [systemTheme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook para acessar o tema
export const useTheme = () => useContext(ThemeContext);
