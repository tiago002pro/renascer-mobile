import React from "react";
import { NativeBaseProvider, StatusBar } from 'native-base';
import { 
  useFonts, 
  Montserrat_200ExtraLight, 
  Montserrat_300Light, 
  Montserrat_400Regular, 
  Montserrat_500Medium,
  Montserrat_700Bold
} from "@expo-google-fonts/montserrat";

import Routes from "./src/router/Router";
import { THEME } from "./src/styles/theme";

export default function App() {
  useFonts({
    "MontserratExtraLight": Montserrat_200ExtraLight,
    "MontserratLight": Montserrat_300Light,
    "MontserratRegular": Montserrat_400Regular,
    "MontserratMedium": Montserrat_500Medium,
    "MontserratBold": Montserrat_700Bold,
  })

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar backgroundColor={THEME.colors.backgroud} barStyle="dark-content"/>
      <Routes/>
    </NativeBaseProvider>
  );
}
