import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { THEME } from "../styles/theme";

import Login from "../pages/Login";
import Welcome from "../pages/Welcome";
import Register from "../pages/Register";
import WatchVideo from "../pages/WatchVideo";
import Tabs from "../tabs";
import Profile from "../pages/Profile";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }}/>
        <Stack.Screen 
          name="Register"
          component={Register} 
          options={{
            title:"Cadastre-se",
            headerShown: true, 
            headerTintColor: "black",
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: THEME.colors.backgroud
            }
          }}
        />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }}/>
        <Stack.Screen name="WatchVideo" component={WatchVideo} options={{ headerShown: false }}/>
        <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}