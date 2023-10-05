import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialIcons } from 'react-native-vector-icons';
import { THEME } from "../styles/theme";

import Login from "../pages/Login";
import Welcome from "../pages/Welcome";
import Register from "../pages/Register";
import WatchVideo from "../pages/WatchVideo";
import Tabs from "../tabs";
import Profile from "../pages/Profile";
import { Button } from "native-base";

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
            headerShown: true,
            title:"Cadastre-se",
            headerTintColor: "black",
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: THEME.colors.backgroud
            }
          }}
        />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: true,
            title: "Meu Perfil",
            headerTintColor: "black",
            headerShadowVisible: false,
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontFamily: "MontserratRegular",
            },
            headerStyle: {
              backgroundColor: THEME.colors.blue[100],
            },
            // headerLeft: () => (
            //   <Button backgroundColor={"transparent"} onPress={() => history.goBack()}>
            //     <MaterialIcons name="chevron-left" size={40} color={"#1a1a1a"}/>
            //   </Button>
            // )
          }}
        />
        <Stack.Screen name="WatchVideo" component={WatchVideo} options={{ headerShown: false }}/>
        <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}