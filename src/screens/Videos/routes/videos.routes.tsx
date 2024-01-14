import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { IconButton } from 'react-native-paper';

import { THEME } from "../../../styles/theme";
import { Videos } from "../pages/Videos";
import { WatchVideo } from "../pages/WatchVideo";

const { Navigator, Screen } = createStackNavigator();

export default function VideosRoutes() {
	return (
		<Navigator screenOptions={{
			headerShown: true,
			headerStyle: {
				backgroundColor: THEME.colors.header,
			},
			headerTintColor: THEME.colors.white,
			headerShadowVisible: false,
			headerBackTitleVisible: false,
		}}>
			<Screen
				name="Videos"
				component={Videos}
				options={{ headerTitle: 'Palavras' }}
			/>

			<Screen
				name="WatchVideo"
				component={WatchVideo}
				options={{ headerTitle: 'Assistir video' }}
			/> 
		</Navigator>
	);
};
