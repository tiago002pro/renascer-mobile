import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from 'react-native-vector-icons';

import Feed from '../screens/Feed';
import Video from '../screens/Video';
import Content from '../screens/Content';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return(
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen 
        name='feed'
        component={Feed}
        options={{
          tabBarIcon: ({color, size}) => <MaterialIcons name="home" color={color} size={size} />,
          tabBarLabel: 'Início'
        }}
      />

      <Tab.Screen 
        name='video'
        component={Video}
        options={{
          tabBarIcon: ({color, size}) => <MaterialIcons name="play-arrow" color={color} size={size} />,
          tabBarLabel: 'Vídeos'
        }}
      />

      <Tab.Screen 
        name='content'
        component={Content}
        options={{
          tabBarIcon: ({color, size}) => <MaterialIcons name="language" color={color} size={size} />,
          tabBarLabel: 'Conteúdo'
        }}
      />
    </Tab.Navigator>
  );
}