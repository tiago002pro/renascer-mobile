import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from 'react-native-vector-icons';

import Home from "../tabs/Home";
import Videos from "../tabs/Videos";
import Schedule from "../tabs/Schedule";
import Content from "../tabs/Content";
import More from "../tabs/More";
import { Button } from "native-base";

const Tab = createBottomTabNavigator();

export default function Tabs({navigation}) {
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
      <Tab.Screen 
        name="Home"
        component={Home}
        options={{
          headerShown: true,
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerRight: () => (
            <Button backgroundColor={"transparent"} onPress={ () => navigation.navigate("Login") }>
              <MaterialIcons name="person" size={30} color={"#1a1a1a"}/>
            </Button>
          ),
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="home" size={size} color={color}/>
          )
        }}
      />
      <Tab.Screen name="Videos" component={Videos} options={{
        headerShown: true,
        tabBarLabel: 'Vídeos',
        tabBarIcon: ({ size, color }) => (
          <MaterialIcons name="play-arrow" size={size} color={color}/>
        )
      }}/>
      <Tab.Screen name="Programação da igreja" 
        component={Schedule} 
        options={{
        headerShown: true,
        tabBarLabel: 'Programação',
        headerStyle: {
          backgroundColor: "black"
        },
        tabBarIcon: ({ size, color }) => (
          <MaterialIcons name="event" size={size} color={color}/>
        )
      }}/>
      <Tab.Screen name="Conteúdo" component={Content} options={{
        headerShown: true,
        tabBarLabel: 'Conteúdo',
        tabBarIcon: ({ size, color }) => (
          <MaterialIcons name="language" size={size} color={color}/>
        )
      }}/>
      <Tab.Screen name="Mais" component={More} options={{
        headerShown: true,
        tabBarLabel: 'Mais',
        tabBarIcon: ({ size, color }) => (
          <MaterialIcons name="more-horiz" size={size} color={color}/>
        )
      }}/>
    </Tab.Navigator>
  );
}