import { createStackNavigator } from "@react-navigation/stack";

import { THEME } from "../../../styles/theme";
import { More } from "../pages/More";

import { Profile } from "../../Profile/pages/Profile";
import { BasicData } from "../../Profile/pages/BasicData";
import { ContactData } from "../../Profile/pages/ContactData";
import { AddressData } from "../../Profile/pages/AddressData";

const { Navigator, Screen } = createStackNavigator();

export default function MoreRoutes() {
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
				options={{ headerTitle: 'Mais' }}
				name="More"
				component={More}
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
