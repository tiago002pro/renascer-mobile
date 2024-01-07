import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { IconButton } from 'react-native-paper';

import { THEME } from "../../../styles/theme";
import Dashboard from "../pages/Dashboard";
import Profile from "../../Profile/pages/Profile";
import SignIn from "../../Profile/pages/SignIn";
import Register from "../../Profile/pages/Register";

const { Navigator, Screen } = createStackNavigator();

export default function DashboardRoutes() {
	const navigation = useNavigation();

	// function goBackSchedule(): any {
	// 	navigation.navigate('Schedule')
	// }

	return (
		<Navigator screenOptions={{
			headerShown: true,
			headerStyle: {
				backgroundColor: THEME.colors.header,
			},
			headerTintColor: THEME.colors.white,
			headerShadowVisible: false,
			// headerLeft: () => (
			// 	<IconButton
			// 		icon="chevron-left"
			// 		iconColor={"#FFF"} size={40}
			// 		onPress={goBackSchedule}
			// 		style={{padding: 0, margin: 0}}
			// 	/>
			// )
		}}>
			<Screen
				name="Dashboard"
				component={Dashboard}
				options={{
					headerShown: false
				}}
			/>

			<Screen
				name="Profile"
				component={Profile}
			/>

      <Screen
				name="SignIn"
				component={SignIn}
			/>

      <Screen
				name="Register"
				component={Register}
			/> 
		</Navigator>
	);
};
