import { createDrawerNavigator } from "@react-navigation/drawer";
import { MaterialIcons } from '@expo/vector-icons';
import TabRoutes from "./tab.routes";
import StackRoutes from "./stack.routes";
import CustomDrawer from "../components/CustomDrawer";

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator
      screenOptions={{ title: "" }}
      drawerContent={CustomDrawer}
    >
      <Drawer.Screen
        name="home"
        component={TabRoutes}
        options={{
          drawerIcon: ({ color, size }) => <MaterialIcons name="home" color={color} size={size} />,
          drawerLabel: "Início",
        }}
      />

      <Drawer.Screen
        name="StackRoutes"
        component={StackRoutes}
        options={{
          drawerIcon: ({ color, size }) => <MaterialIcons name="person" color={color} size={size} />,
          drawerLabel: "Perfil",
          drawerItemStyle: {
          }
        }}
      />
    </Drawer.Navigator>
  );
}