import { createStackNavigator } from "@react-navigation/stack";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";

const Stack = createStackNavigator();

export default function StackRoutes() {
	return (
		<Stack.Navigator>
			<Stack.Screen
        name="home"
        component={Profile}
      /> 
		</Stack.Navigator>
	);
};
