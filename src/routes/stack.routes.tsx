import { createStackNavigator } from "@react-navigation/stack";

import { THEME } from "../styles/theme";

import TabRoutes from "./tab.routes";
import SignIn from "../screens/Profile/pages/SignIn";
import Register from "../screens/Profile/pages/Register";

const { Navigator, Screen } = createStackNavigator();

export default function StackRoutes() {
  return (
    <Navigator screenOptions={{
      headerShadowVisible: false,
      headerStyle: {
        backgroundColor: THEME.colors.header,
      },
      headerTintColor: THEME.colors.white,
    }}>
      <Screen
        options={{ headerShown: false }}
				name="TabRoutes"
				component={TabRoutes}
			/>

      <Screen
        options={{ headerTitle: 'Login' }}
				name="SignIn"
				component={SignIn}
			/>

      <Screen
        options={{ headerTitle: 'Cadastre-se' }}
				name="Register"
				component={Register}
			/> 
    </Navigator>
  )
}