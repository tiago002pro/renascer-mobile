import React from "react";
import { NativeBaseProvider, StatusBar } from 'native-base';

import Routes from "./src/router/Router";
import { THEME } from "./src/styles/theme";

export default function App() {
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar backgroundColor={THEME.colors.backgroud} barStyle="light-content"/>
      <Routes/>
    </NativeBaseProvider>
  );
}
