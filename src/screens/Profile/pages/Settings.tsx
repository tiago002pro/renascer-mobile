import { Icon, Text, View } from "native-base";
import { MaterialIcons } from 'react-native-vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";

import { useAuth } from "../../../contexts/auth";

import { THEME } from "../../../styles/theme";
import { styles } from "../styles/Settings";

export function Settings({ navigation }) {
  const {signOut} = useAuth();

  const options = [
    {
      id: '1',
      vectorIcon: MaterialIcons,
      icon: 'delete-outline',
      label: 'Excluir conta',
      action: out,
    },
    {
      id: '2',
      vectorIcon: MaterialIcons,
      icon: 'logout',
      label: 'Sair',
      action: out,
    }
  ]

  function out():void {
    signOut()
    navigation.goBack()
		navigation.navigate('DashboardRoutes', {screen: 'Dashboard'});
  }

  return (
    <View style={styles.container}>
      {options.map(({id, vectorIcon, icon, label, action}) => {
        return (
          <TouchableOpacity
            key={id}
            onPress={action}
            style={styles.option}
          >
            <Icon
              as={vectorIcon}
              name={icon}
              color={THEME.colors.red[500]}
              size={5}
              mr={2}
            />
            <Text style={styles.label}>
              {label}
            </Text>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}