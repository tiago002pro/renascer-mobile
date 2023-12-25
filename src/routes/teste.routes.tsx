import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { IconButton } from 'react-native-paper';

import { THEME } from "../styles/theme";
import { Ticket } from "../pages/ticket";
import Events from "../pages/tabs/Events";

const Stack = createStackNavigator();

export default function EventsRoutes() {
	const navigation = useNavigation();

	function goBackEvents(): any {
		navigation.navigate('Events')
	}

	return (
		<Stack.Navigator screenOptions={{
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
				// 		onPress={goBackEvents}
				// 		style={{padding: 0, margin: 0}}
				// 	/>
				// )
			}}>
			<Stack.Screen
				name="Eventssss"
				component={Events}
				options={{
					headerShown: false
				}}
			/>
			<Stack.Screen
				name="Ticket"
				component={Ticket}
			/> 
		</Stack.Navigator>
	);
};
