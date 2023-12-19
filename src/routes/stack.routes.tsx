import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { IconButton } from 'react-native-paper';
import { WatchVideo } from "../pages/WatchVideo";

import { THEME } from "../styles/theme";
import Profile from "../pages/Profile";

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
					/>
				)
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
