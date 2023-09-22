import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from "../pages/Welcome";
import Login from "../pages/Login";

import Home from "../pages/Home";
import Video from "../pages/Videos";
import Events from "../pages/Events";
import Content from "../pages/Content";
import More from "../pages/More";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: true }}/>
      <Stack.Screen name="Login" component={Login} options={{ headerShown: true }}/>

      <Stack.Screen name="Home"    component={Home}    options={{ headerShown: true }}/>
      <Stack.Screen name="Video"   component={Video}   options={{ headerShown: true }}/>
      <Stack.Screen name="Events"  component={Events}  options={{ headerShown: true }}/>
      <Stack.Screen name="Content" component={Content} options={{ headerShown: true }}/>
      <Stack.Screen name="More"    component={More}    options={{ headerShown: true }}/>
    </Stack.Navigator>
  );
}