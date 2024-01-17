import { Box, Icon, IconButton } from "native-base";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

import { THEME } from "../../../styles/theme";

import { Profile } from "../pages/Profile";
import { BasicData } from "../pages/BasicData";
import { ContactData } from "../pages/ContactData";
import { AddressData } from "../pages/AddressData";
import { Settings } from "../pages/Settings";

const { Navigator, Screen } = createStackNavigator();

export default function ProfileRoutes({ navigation }) {
	return (
		<Navigator screenOptions={{
			headerShown: true,
			headerStyle: {
				backgroundColor: THEME.colors.backgroud,
			},
			headerTintColor: THEME.colors.white,
			headerTitleAlign: 'center',
			headerShadowVisible: false,
			headerBackTitleVisible: false,
		}}>

			<Screen
				name="Profile"
				component={Profile}
				options={{
					headerTitle: 'Meu Perfil',
					headerRight: () => 
					<Box alignItems="center">
						<IconButton
							onPress={() => navigation.navigate('Settings')}
							icon={
								<Icon as={Ionicons} name="settings-sharp"/>
							}
							borderRadius={'full'}
							_icon={{
								color: '#FFF',
								size: 6
							}}
							style={{marginEnd: THEME.sizes.paddingPages}}
						/>
					</Box>,
					headerLeft: () =>
					<Box>
						<IconButton
							onPress={() => navigation.goBack()}
							icon={
								<Icon as={MaterialIcons} name="arrow-back-ios"/>
							}
							borderRadius={'full'}
							_icon={{
								color: '#FFF',
								size: 6
							}}
							style={{marginStart: THEME.sizes.paddingPages}}
						/>
					</Box>,
				}}
			/>

			<Screen
				name="Settings"
				component={Settings}
				options={{ headerTitle: 'Configurações' }}
			/>

      		<Screen
				options={{ headerTitle: 'Dados Básicos' }}
				name="BasicData"
				component={BasicData}
			/>

			<Screen
				name="ContactData"
				component={ContactData}
				options={{ headerTitle: 'Contato' }}
			/>

			<Screen
				name="AddressData"
				component={AddressData}
				options={{ headerTitle: 'Endereço' }}
			/>
		</Navigator>
	);
};
