import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider, StatusBar } from 'native-base';

import Routes from './src/routes';
import { AuthProvider } from './src/contexts/auth';

import { THEME } from './src/styles/theme';
import { LogBox } from 'react-native';

export default function registerRootComponentApp() {
  useEffect(() => {
    LogBox.ignoreLogs(['In React 18, SSRProvider is not necessary and is a noop. You can remove it from your app.']);
  }, []);

  return (
    <NativeBaseProvider theme={THEME}>
      <NavigationContainer>
        <AuthProvider>
          <StatusBar backgroundColor={THEME.colors.statusBar} barStyle='light-content'/>
          <Routes />
        </AuthProvider>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
