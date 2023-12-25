import { createStackNavigator } from "@react-navigation/stack";

import SignIn from "../screens/Dashboard/pages/SignIn";
import Register from "../screens/Dashboard/pages/Register";

const AuthStack = createStackNavigator();

export default function AuthRoutes() {
	return (
		<AuthStack.Navigator screenOptions={{ headerShown: false }}>
			<AuthStack.Screen
				name="SignIn"
				component={SignIn}
			/>
			
			<AuthStack.Screen
				name="Register"
				component={Register}
				options={{
					headerShown: true,
					title: "Cadastre-se",
					headerShadowVisible: false,
					headerBackTitleVisible: false,
				}}
			/>
		</AuthStack.Navigator>
	);
};
