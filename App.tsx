import 'react-native-gesture-handler';
import { NativeBaseProvider, StatusBar } from 'native-base';

import { THEME } from "./src/styles/theme";
import Routes from "./src/routes";

export default function App() {
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar backgroundColor={THEME.colors.backgroud} barStyle='dark-content'/>
      <Routes />
    </NativeBaseProvider>
  );
}
