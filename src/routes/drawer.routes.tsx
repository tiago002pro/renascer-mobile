import { createDrawerNavigator } from "@react-navigation/drawer";
import { Feather } from '@expo/vector-icons';
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
          drawerIcon: ({ color, size }) => <Feather name="home" color={color} size={size} />,
          drawerLabel: "Início",
        }}
      />

      <Drawer.Screen
        name="stack"
        component={StackRoutes}
        options={{
          drawerIcon: ({ color, size }) => <Feather name="user" color={color} size={size} />,
          drawerLabel: "Perfil",
        }}
      />
    </Drawer.Navigator>
  );
}