import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { IconButton } from 'react-native-paper';

import { THEME } from "../../../styles/theme";
import { Ticket } from "../pages/Ticket";
import { Schedule } from "../pages/Schedule";

const { Navigator, Screen } = createStackNavigator();

export default function ScheduleRoutes() {
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
				name="Schedule"
				component={Schedule}
				options={{
					headerShown: false
				}}
			/>

			<Screen
				name="Ticket"
				component={Ticket}
			/> 
		</Navigator>
	);
};
