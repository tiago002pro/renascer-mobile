import React from "react";
import { NativeBaseProvider, StatusBar } from 'native-base';

import Routes from "./src/router/Router";

export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar backgroundColor="#F0A500" barStyle="light-content"/>
      <Routes/>
    </NativeBaseProvider>
  );
}
