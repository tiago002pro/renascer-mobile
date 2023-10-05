import React , { useEffect } from "react";
import { NativeBaseProvider, StatusBar } from 'native-base';
import { 
  useFonts, 
  Montserrat_200ExtraLight, 
  Montserrat_300Light, 
  Montserrat_400Regular, 
  Montserrat_700Bold
} from "@expo-google-fonts/montserrat";

import Routes from "./src/router/Router";
import { THEME } from "./src/styles/theme";
import api from "./src/services/api";

export default function App() {
  useEffect(() => {
    async function pegarDados() {
      const resultado = await api.get('/api/person/all')
      console.log("resultado", resultado.data);
      
    }
    pegarDados()
  }, [])

  useFonts({
    "MontserratExtraLight": Montserrat_200ExtraLight,
    "MontserratLight": Montserrat_300Light,
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  })

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar backgroundColor={THEME.colors.backgroud} barStyle="dark-content"/>
      <Routes/>
    </NativeBaseProvider>
  );
}
