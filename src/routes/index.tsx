import { NavigationContainer } from "@react-navigation/native";

import DrawerRoutes from "./draw.routes";

export default function Routes() {
  return(
    <NavigationContainer>
      <DrawerRoutes />
    </NavigationContainer>
  );
}