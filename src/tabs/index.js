import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from 'react-native-vector-icons';
import { Button } from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { THEME } from "../styles/theme";

import Home from "../tabs/Home";
import Videos from "../tabs/Videos";
import Schedule from "../tabs/Schedule";
import Content from "../tabs/Content";
import More from "../tabs/More";

const Tab = createBottomTabNavigator();

export default function Tabs({navigation}) {
  var token = null
  useEffect(() => {
    async function verifyLogin() {
      token = await AsyncStorage.getItem('token')
      console.log("TOKEN", token);
    }
    verifyLogin()
  })
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: THEME.colors.backgroud,
          borderTopColor: "transparent",
          paddingTop: 10,
        },
        tabBarActiveTintColor: "#fff",
      }}
    >
      <Tab.Screen 
        name={"Home"}
        component={Home}
        options={{
          headerShown: true,
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: THEME.colors.backgroud,
          },
          headerRight: () => {
            return token ? (
              <Button backgroundColor={"transparent"} onPress={ () => navigation.navigate("Profile") }>
                <MaterialIcons name="person" size={30} color={"white"}/>
              </Button>
            )
            : (
              <Button
                onPress={ () => navigation.navigate("Login") }
                backgroundColor={"transparent"}
                borderColor={"orange.500"}
                borderWidth={1}
                p={1}
                _text={{
                  textTransform: "uppercase",
                  fontSize: "xs"
                }}
                _pressed={{
                  backgroundColor: "orange.500",
                  borderColor: "transparent",
                }}
              >
                Login
              </Button>
            )
          },
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