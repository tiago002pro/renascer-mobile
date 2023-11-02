import { createStackNavigator } from "@react-navigation/stack";
import SignIn from "../pages/SignIn";

const AuthStack = createStackNavigator();

export default function AuthStackRoutes() {
	return (
		<AuthStack.Navigator>
			<AuthStack.Screen name="SignIn" component={SignIn} />
		</AuthStack.Navigator>
	);
};
