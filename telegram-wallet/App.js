import React from 'react';
import { NavigationContainer, ThemeProvider } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';
import { LightTheme, DarkTheme } from './styles/theme';
import { useColorScheme } from 'react-native';

const App = () => {
  const scheme = useColorScheme();

  return (
    <ThemeProvider value={scheme === 'dark' ? DarkTheme : LightTheme}>
      <NavigationContainer theme={scheme === 'dark' ? DarkTheme : LightTheme}>
        <AppNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
