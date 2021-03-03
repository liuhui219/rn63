import 'react-native-gesture-handler';
import React, {Component, useCallback, useEffect} from 'react';
import {AppRegistry, LogBox} from 'react-native';
import {enableScreens} from 'react-native-screens';
import App from './App';
import {
  Provider as PaperProvider,
  DefaultTheme,
  DarkTheme,
} from 'react-native-paper';
import {Provider as LocalizationContext} from '@@/contexts/LocalizationContext';
import {name as appName} from './app.json';
enableScreens();
console.disableYellowBox = true;
const theme = {
  ...DarkTheme,
  dark: true, 
  roundness: 2,
};
function Main() {
  return (
    <PaperProvider theme={theme}>
      <LocalizationContext>
        <App />
      </LocalizationContext>
    </PaperProvider>
  );
}
AppRegistry.registerComponent(appName, () => Main);
