import { registerRootComponent } from 'expo';
import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';

import Routes from './src/routes';
import { AuthProvider } from './src/contexts/auth';

import { THEME } from './src/styles/theme';

export default function registerRootComponentApp() {
  return (
    <NativeBaseProvider theme={THEME}>
      <NavigationContainer>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
