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

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
    <NavigationContainer options={{headerStyle: {padding: "50"}}}>
      <Stack.Navigator>
        <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={{
            headerShown: false,
            headerShadowVisible: false,
          }}
        />

        <Stack.Screen 
          name="Register"
          component={Register} 
          options={{
            headerShown: true,
            title:"Cadastre-se",
            headerTintColor: "white",
            headerShadowVisible: false, 
            headerStyle: {
              backgroundColor: THEME.colors.backgroud,
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
              fontSize: THEME.fontSizes.sm,
              fontWeight: "bold",
            },
            headerStyle: {
              backgroundColor: THEME.colors.blue[100],
            },
            // headerLeft: () => (
            //   <Button backgroundColor={"transparent"} onPress={() => {}}>
            //     <MaterialIcons name="chevron-left" size={40} color={"#1a1a1a"}/>
            //   </Button>
            // ),
            // headerRight: () => (
            //   <Button backgroundColor={"transparent"} onPress={() => logout()} padding={0} right={-10}>
            //     <MaterialIcons name="logout" size={25} color={"#1a1a1a"}/>
            //   </Button>
            // )
          }}
        />

        <Stack.Screen name="WatchVideo" component={WatchVideo} options={{ headerShown: false }}/>
        {/* <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}