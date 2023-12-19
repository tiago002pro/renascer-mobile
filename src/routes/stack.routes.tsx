import { createStackNavigator } from "@react-navigation/stack";
import Profile from "../pages/Profile";
import { WatchVideo } from "../pages/WatchVideo";
import { THEME } from "../styles/theme";

const Stack = createStackNavigator();

export default function StackRoutes() {
	return (
		<Stack.Navigator screenOptions={{
				headerShown: true,
				headerStyle: {backgroundColor: THEME.colors.header},
				headerTintColor: THEME.colors.white,
				headerShadowVisible: false,
			}}>
			<Stack.Screen
				name="WatchVideo"
				component={WatchVideo}
			/> 
			<Stack.Screen
				name="stack"
				component={Profile}
			/>

		</Stack.Navigator>
	);
};
