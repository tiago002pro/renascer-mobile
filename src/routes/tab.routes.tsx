import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from '@expo/vector-icons';

import Events from "../pages/tabs/Events";
import Contribute from "../pages/tabs/Contribute";
import More from "../pages/tabs/More";
import { THEME } from "../styles/theme";
import Dashboard from "../pages/tabs/Dashboard";
import Videos from "../pages/tabs/Videos";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: true, 
      tabBarStyle: {backgroundColor: THEME.colors.tabBar, borderTopWidth: 0},
      tabBarActiveTintColor: '#FFF',
      tabBarLabelStyle: {
        marginTop: -5,
        marginBottom: 5,
      },
    }}>
      <Tab.Screen
        name="Dashboard" 
        component={Dashboard}
        options={{
          tabBarIcon: ({ color, size }) => <MaterialIcons name="home" color={color} size={size} />,
          tabBarLabel: "Início",
        }}
      />

      <Tab.Screen
        name="Videos" 
        component={Videos}
        options={{
          tabBarIcon: ({ color, size }) => <MaterialIcons name="video-library" color={color} size={size} />,
          tabBarLabel: "Palavras",
        }}
      />

      <Tab.Screen
        name="Events" 
        component={Events}
        options={{
          tabBarIcon: ({ color, size }) => <MaterialIcons name="event" color={color} size={size} />,
          tabBarLabel: "Eventos",
        }}
      />

      <Tab.Screen
        name="Contribute" 
        component={Contribute}
        options={{
          tabBarIcon: ({ color, size }) => <MaterialIcons name="volunteer-activism" color={color} size={size} />,
          tabBarLabel: "Contribua",
        }}
      />

      <Tab.Screen
        name="More" 
        component={More}
        options={{
          tabBarIcon: ({ color, size }) => <MaterialIcons name="more-horiz" color={color} size={size} />,
          tabBarLabel: "Mais",
        }}
      />
    </Tab.Navigator>
  );
}