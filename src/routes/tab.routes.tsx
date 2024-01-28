import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from '@expo/vector-icons';

import { THEME } from "../styles/theme";

import ScheduleRoutes from "../screens/Schedule/routes/schedule.routes";
import DashboardRoutes from "../screens/Dashboard/routes/dashboard.routes";
import VideosRoutes from "../screens/Videos/routes/videos.routes";
import MoreRoutes from "../screens/More/routes/more.routes";

const { Navigator, Screen } = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Navigator screenOptions={{
      headerShown: true,
      headerShadowVisible: false,
      headerStyle: {
        backgroundColor: THEME.colors.header,
      },
      tabBarStyle: {backgroundColor: THEME.colors.tabBar, borderTopWidth: 0},
      tabBarActiveTintColor: '#FFF',
      tabBarLabelStyle: {
        marginTop: -5,
        marginBottom: 5,
      },
      headerTitleStyle: {
        color: 'white'
      }
    }}>
      <Screen
        name="DashboardRoutes" 
        component={DashboardRoutes}
        options={{
          tabBarIcon: ({ color, size }) => <MaterialIcons name="home" color={color} size={size} />,
          tabBarLabel: "Início",
          headerShown: false
        }}
      />

      <Screen
        name="Palavras" 
        component={VideosRoutes}
        options={{
          tabBarIcon: ({ color, size }) => <MaterialIcons name="video-library" color={color} size={size} />,
          tabBarLabel: "Palavras",
        }}
      />

      <Screen
        name="Eventos"
        component={ScheduleRoutes}
        options={{
          tabBarIcon: ({ color, size }) => <MaterialIcons name="event" color={color} size={size} />,
          tabBarLabel: "Eventos",
        }}
      />

      {/* <Screen
        name="Contribute" 
        component={Contribute}
        options={{
          tabBarIcon: ({ color, size }) => <MaterialIcons name="volunteer-activism" color={color} size={size} />,
          tabBarLabel: "Contribua",
        }}
      /> */}

      <Screen
        name="MoreRoutes" 
        component={MoreRoutes}
        options={{
          tabBarIcon: ({ color, size }) => <MaterialIcons name="more-horiz" color={color} size={size} />,
          tabBarLabel: "Mais",
          title: "Mais",
          headerShown: false
        }}
      />
    </Navigator>
  );
}