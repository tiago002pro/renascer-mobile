import { Box, Button, Icon, IconButton, Image, Text, View } from "native-base";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from '@expo/vector-icons';

import { useAuth } from "../../../contexts/auth";

import { THEME } from "../../../styles/theme";

import Dashboard from "../pages/Dashboard";

const { Navigator, Screen } = createStackNavigator();

export default function DashboardRoutes({ navigation }) {
	const {signed} = useAuth()

	async function goSignIn(): Promise<void> {
		navigation.navigate('SignIn');
	}
	
	async function goProfile(): Promise<void> {
		navigation.navigate('ProfileRoutes', {screen: 'Profile'});
	}
	
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
				name="Dashboard"
				component={Dashboard}
				options={{
					headerTitle: (
						() =>
						<View
							justifyContent={'space-between'}
							alignItems={'center'}
							flexDirection={'row'}
						>
							<Image
								source={require("./../../../assets/images/logo.png")}
								alt="logo"
								style={{ width: 25, height: 25, marginRight: 7 }}
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
								style={{marginEnd: THEME.sizes.paddingPages}}
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
										backgroundColor: 'transparent'
									}}
								/>
							</Box>
						)
					)
				}}
			/>
		</Navigator>
	);
};
