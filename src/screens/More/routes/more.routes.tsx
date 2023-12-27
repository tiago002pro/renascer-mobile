import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { IconButton } from 'react-native-paper';

import { THEME } from "../../../styles/theme";
import { More } from "../pages/More";
import Profile from "../../Dashboard/pages/Profile";
import ProfileForm from "../../Dashboard/pages/ProfileForm";

const { Navigator, Screen } = createStackNavigator();

export default function MoreRoutes() {
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
				name="More"
				component={More}
			/>

			<Screen
				name="Profile"
				component={Profile}
			/>

      <Screen
				name="ProfileForm"
				component={ProfileForm}
			/>
		</Navigator>
	);
};