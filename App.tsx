import 'moment/locale/pt-br';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider, StatusBar } from 'native-base';
import { LogBox } from 'react-native';
import FlashMessage from 'react-native-flash-message';

import { AuthProvider } from './src/contexts/auth';
import Routes from './src/routes';

import { THEME } from './src/styles/theme';

export default function registerRootComponentApp() {
  useEffect(() => {
    LogBox.ignoreLogs(['In React 18, SSRProvider is not necessary and is a noop. You can remove it from your app.']);
  }, []);

  return (
    <NativeBaseProvider theme={THEME}>
      <NavigationContainer>
        <AuthProvider>
          <StatusBar backgroundColor={THEME.colors.header} barStyle='light-content'/>
          <Routes />
        </AuthProvider>
      </NavigationContainer>
      <FlashMessage position="top" />
    </NativeBaseProvider>
  );
}
