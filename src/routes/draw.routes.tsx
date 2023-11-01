import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialIcons } from 'react-native-vector-icons';

import TabRoutes from './tab.routes';
import CustomDrawer from '../components/CustomDrawer';
import StackRoutes from './stack.routes';
import Leadership from '../screens/Leadership';

const Drawer = createDrawerNavigator()

export default function DrawerRoutes() {
  return(
    <Drawer.Navigator 
      screenOptions={{ title: '' }}
      drawerContent={CustomDrawer}
    >
      <Drawer.Screen
        name='Home'
        component={TabRoutes}
        options={{
          drawerIcon: ({color, size}) => <MaterialIcons name="home" color={color} size={size} />,
          headerShadowVisible: false,
          drawerLabel: 'Home',
          headerStyle: {
            backgroundColor: '#1a1a1a'
          }
        }}
      />

      {/* <Drawer.Screen
        name='StackRoutes'
        component={StackRoutes}
        options={{
          headerShown: false,
          drawerIcon: ({color, size}) => <MaterialIcons name="person" color={color} size={size} />,
          drawerLabel: 'Meu Perfil'
        }}
      /> */}

      <Drawer.Screen
        name='Leadership'
        component={Leadership}
        options={{
          drawerIcon: ({color, size}) => <MaterialIcons name="home" color={color} size={size} />,
          drawerLabel: 'Leadership',
        }}
      />

    </Drawer.Navigator>
  );
}