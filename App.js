import React from "react";
import { StatusBar } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/router";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#F0A500" barStyle="light-content"/>
      <Routes/>
    </NavigationContainer>
  );
}
