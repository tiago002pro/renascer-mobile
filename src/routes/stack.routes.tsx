import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { IconButton } from 'react-native-paper';
import { WatchVideo } from "../pages/WatchVideo";

import { THEME } from "../styles/theme";
import Profile from "../pages/Profile";
import { Ticket } from "../pages/ticket";
import SignIn from "../pages/SignIn";
import TabRoutes from "./tab.routes";
import Register from "../pages/Register";
import More from "../pages/tabs/More";

const Stack = createStackNavigator();

export default function StackRoutes() {
	const navigation = useNavigation();

	function goBack() {
		navigation.goBack()
	}

	return (
		<Stack.Navigator screenOptions={{
				headerShown: true,
				headerStyle: {
					backgroundColor: THEME.colors.header,
				},
				headerTintColor: THEME.colors.white,
				headerShadowVisible: false,
				headerLeft: () => (
					<IconButton
						icon="chevron-left"
						iconColor={"#FFF"} size={40}
						onPress={goBack}
						style={{padding: 0, margin: 0}}
					/>
				)
			}}>
			<Stack.Screen
				name="WatchVideo"
				component={WatchVideo}
			/>
			<Stack.Screen
				name="Profile"
				component={Profile}
			/>
			<Stack.Screen
				name="More"
				component={More}
			/>
		</Stack.Navigator>
	);
};
