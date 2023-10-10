import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialIcons } from 'react-native-vector-icons';

import TabRoutes from './tab.routes';
import StackRoutes from './stack.routes';

const Drawer = createDrawerNavigator()

export default function DrawerRoutes() {
  return(
    <Drawer.Navigator screenOptions={{ title: '' }}>
      <Drawer.Screen
        name='home'
        component={TabRoutes}
        options={{
          drawerIcon: ({color, size}) => <MaterialIcons name="home" color={color} size={size} />,
          drawerLabel: 'Início'
        }}
      />

      <Drawer.Screen
        name='profile'
        component={StackRoutes}
        options={{
          drawerIcon: ({color, size}) => <MaterialIcons name="person" color={color} size={size} />,
          drawerLabel: 'Meu Perfil'
        }}
      />
    </Drawer.Navigator>
  );
}