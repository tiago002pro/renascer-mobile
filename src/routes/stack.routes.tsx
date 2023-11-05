import { createStackNavigator } from "@react-navigation/stack";
import Profile from "../pages/Profile";

const Stack = createStackNavigator();

export default function StackRoutes() {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen
        name="stack"
        component={Profile}
      /> 
		</Stack.Navigator>
	);
};
