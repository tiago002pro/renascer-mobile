import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from 'react-native-vector-icons';

import Home from "../tabs/Home";
import Videos from "../tabs/Videos";
import Schedule from "../tabs/Schedule";
import Content from "../tabs/Content";
import More from "../tabs/More";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#1a1a1a",
          borderTopColor: "transparent",
          paddingTop: 10,
        },
        tabBarActiveTintColor: "#fff",
      }}
    >
      <Tab.Screen name="Home" component={Home} options={{
        headerShown: false,
        tabBarLabel: 'Home',
        tabBarIcon: ({ size, color }) => (
          <MaterialIcons name="home" size={size} color={color}/>
        )
      }}/>
      <Tab.Screen name="Videos" component={Videos} options={{
        headerShown: false,
        tabBarLabel: 'Vídeos',
        tabBarIcon: ({ size, color }) => (
          <MaterialIcons name="play-arrow" size={size} color={color}/>
        )
      }}/>
      <Tab.Screen name="Programação da igreja" 
        component={Schedule} 
        options={{
        headerShown: false,
        tabBarLabel: 'Programação',
        tabBarIcon: ({ size, color }) => (
          <MaterialIcons name="event" size={size} color={color}/>
        )
      }}/>
      <Tab.Screen name="Content" component={Content} options={{
        headerShown: false,
        tabBarLabel: 'Conteúdo',
        tabBarIcon: ({ size, color }) => (
          <MaterialIcons name="language" size={size} color={color}/>
        )
      }}/>
      <Tab.Screen name="More" component={More} options={{
        headerShown: false,
        tabBarLabel: 'Mais',
        tabBarIcon: ({ size, color }) => (
          <MaterialIcons name="more-horiz" size={size} color={color}/>
        )
      }}/>
    </Tab.Navigator>
  );
}