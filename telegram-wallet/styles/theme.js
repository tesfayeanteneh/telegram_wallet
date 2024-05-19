import { DefaultTheme, DarkTheme } from '@react-navigation/native';

export const LightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#FFFFFF',
    primary: '#6200EE',
    text: '#000000',
    card: '#F8F8F8',
    border: '#E0E0E0',
  },
  typography: {
    fontFamily: 'Arial',
    fontSize: 16,
  },
};

export const DarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: '#000000',
    primary: '#BB86FC',
    text: '#FFFFFF',
    card: '#121212',
    border: '#272727',
  },
  typography: {
    fontFamily: 'Arial',
    fontSize: 16,
  },
};
