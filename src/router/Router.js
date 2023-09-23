import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../pages/Login";
import Welcome from "../pages/Welcome";
import Tabs from "../tabs";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }}/>
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
      <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}