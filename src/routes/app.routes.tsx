import { createStackNavigator } from "@react-navigation/stack";
import Dashboard from "../pages/Dashboard";

const AppStack = createStackNavigator();

export default function AppStackRoutes() {
	return (
		<AppStack.Navigator>
      <AppStack.Screen name="Dashboard" component={Dashboard} /> 
		</AppStack.Navigator>
	);
};
