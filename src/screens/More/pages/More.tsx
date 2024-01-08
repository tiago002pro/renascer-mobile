import { Text, TouchableHighlight, View } from "react-native";
import { Box } from "native-base";
import { Ionicons } from 'react-native-vector-icons';

import { useAuth } from "../../../contexts/auth";

import { styles } from "../styles/More";

export function More({ navigation }) {
	const {signed} = useAuth();

  function goProfile(){
    navigation.navigate('Profile');
  } 

  return (
    <View style={styles.container}>
      {signed ?
          <TouchableHighlight
            onPress={goProfile}
            style={styles.Touchable}
            underlayColor={'transparent'}
          >
            <ItemMore
              icon={'person-circle'}
              title={'Ver meu perfil'}
            />
          </TouchableHighlight>
        :
        null  
      }
    </View>
  );
}

export function ItemMore({icon, title}) {
  return (
    <View style={styles.options}>
      <Box style={styles.item}>
        <Ionicons name={icon} style={styles.icon} size={20} />
        <Text style={styles.title}>{title}</Text>
      </Box>
      <Box style={styles.arrow}>
        <Ionicons name={'arrow-forward'} style={styles.arrowIcon} size={20} />
      </Box>
    </View>
  );
}