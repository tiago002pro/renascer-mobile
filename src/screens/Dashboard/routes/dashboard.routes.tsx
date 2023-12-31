import { Box, Button, Icon, IconButton, Image, Text, View } from "native-base";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from '@expo/vector-icons';

import { useAuth } from "../../../contexts/auth";

import { THEME } from "../../../styles/theme";

import Dashboard from "../pages/Dashboard";
import { Profile } from "../../Profile/pages/Profile";
import { BasicData } from "../../Profile/pages/BasicData";
import { ContactData } from "../../Profile/pages/ContactData";
import { AddressData } from "../../Profile/pages/AddressData";

const { Navigator, Screen } = createStackNavigator();

export default function DashboardRoutes({ navigation }) {
	const {signed, signIn} = useAuth()

	async function goSignIn(): Promise<void> {
		navigation.navigate('SignIn');
	}
	
	async function goProfile(): Promise<void> {
		navigation.navigate('DashboardRoutes', {screen:'Profile'});
	}
	
	return (
		<Navigator screenOptions={{
			headerShown: true,
			headerStyle: {
				backgroundColor: THEME.colors.header,
			},
			headerTintColor: THEME.colors.white,
			headerShadowVisible: false,
		}}>
			<Screen
				name="Dashboard"
				component={Dashboard}
				options={{
					headerTitle: (
						() =>
						<View
							alignItems={'center'}
							display={'flex'}
							flexDirection={'row'}
							justifyContent={'center'}
						>
							<Image
								source={require("./../../../assets/images/logo.png")}
								alt="logo"
								style={{ width: 25, height: 25, padding: 2, marginRight: 7 }}
							/>
							<Text
								color={'#FFF'}
								textTransform={'uppercase'}
								fontSize={12}
							>
								Igreja Renascer
							</Text>
						</View>
				  	),
					headerRight: (
						() =>
						(!signed ?
							<Button
								onPress={goSignIn}
								borderRadius={50}
								height={8}
								marginRight={5}
								backgroundColor={'transparent'}
								borderColor={'yellow.400'}
								borderWidth={1}
								_pressed={{
									backgroundColor: 'yellow.400',
									_text: {
									color: 'backgroud',
									fontWeight: 'bold'
									}
								}}
								_text={{
									color: 'yellow.400',
									textTransform: 'uppercase',
									fontSize: 12,
									lineHeight: 12,
								}}
							>
								Login
							</Button>
						:
							<Box alignItems="center">
								<IconButton
									onPress={goProfile}
									icon={
										<Icon as={Ionicons} name="person-circle"/>
									}
									borderRadius={'full'}
									_icon={{
										color: '#FFF',
										size: 8
									}}
									_pressed={{
										bg: 'yellow.400:alpha.20'
									}}
								/>
							</Box>
						)
					)
				}}
			/>

			<Screen
				options={{ headerTitle: 'Meu Perfil' }}
				name="Profile"
				component={Profile}
			/>

			<Screen
				options={{ headerTitle: 'Dados Básicos' }}
				name="BasicData"
				component={BasicData}
			/>

			<Screen
				options={{ headerTitle: 'Contato' }}
				name="ContactData"
				component={ContactData}
			/>

			<Screen
				options={{ headerTitle: 'Endereço' }}
				name="AddressData"
				component={AddressData}
			/>
		</Navigator>
	);
};
