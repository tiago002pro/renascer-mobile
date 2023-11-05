import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from '@expo/vector-icons';

import Feed from "../screens/Feed";
import New from "../screens/New";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Feed" 
        component={Feed}
        options={{
          tabBarIcon: ({ color, size }) => <MaterialIcons name="home" color={color} size={size} />,
          tabBarLabel: "Início",
        }}
      />
      <Tab.Screen
        name="New" 
        component={New}
        options={{
          tabBarIcon: ({ color, size }) => <MaterialIcons name="play-arrow" color={color} size={size} />,
          tabBarLabel: "Novo",
        }}
      />
    </Tab.Navigator>
  );
}