import { Text, TouchableWithoutFeedback, View } from "react-native";
import { Box, Icon, IconButton, Image } from "native-base";
import { FontAwesome5, Ionicons, MaterialIcons } from 'react-native-vector-icons';

import { useAuth } from "../../../contexts/auth";

import { THEME } from "../../../styles/theme";
import { styles } from "../styles/More";

import profileImage from './../../../assets/images/profile.jpg';
export function More({ navigation }) {
	const {signed, signIn} = useAuth()

  async function goProfile(): Promise<void> {
    navigation.navigate('Profile');
  }

  return (
    <View style={styles.container}>
      {signed?
        <Box style={styles.profile}>
          <Box style={styles.content}>
            <Box style={styles.imageArea}>
              <Image
                source={profileImage}
                alt="User"
                style={styles.imageUser}
              />
              <Box position={'absolute'} bottom={0} right={0}>
                <IconButton
                  padding={2}
                  backgroundColor={THEME.colors.backgroud}
                  icon={<Icon as={MaterialIcons} name="add-a-photo"/>}
                  borderRadius={'full'}
                  _icon={{
                    color: THEME.colors.yellow[400],
                    size: 4
                  }}
                />
              </Box>
            </Box>
            <Box style={styles.textArea}>
              <Text style={styles.name}>Tiago Barbosa</Text>
            </Box>
          </Box>

          <Box style={styles.lineContainer}>
            <Box style={styles.line}></Box>
          </Box>
          <TouchableWithoutFeedback onPress={goProfile}>
            <Box style={styles.profileFooter}>
              <Ionicons name={'person-circle'} style={styles.iconFooter} size={20} />
              <Text style={styles.textFooter}>Ver meu perfil</Text>
            </Box>
          </TouchableWithoutFeedback>
        </Box>
      : null  
      }

      <Box style={styles.options}>
        <Box style={styles.item}>
          <FontAwesome5 name={'bible'} style={styles.icon} size={15} />
          <Text style={styles.title}>Bíblia</Text>
        </Box>
        <Box style={styles.arrow}>
          <Ionicons name={'arrow-forward'} style={styles.arrowIcon} size={20} />
        </Box>
      </Box>

      <Box style={styles.options}>
        <Box style={styles.item}>
          <FontAwesome5 name={'book'} style={styles.icon} size={15} />
          <Text style={styles.title}>Leituras</Text>
        </Box>
        <Box style={styles.arrow}>
          <Ionicons name={'arrow-forward'} style={styles.arrowIcon} size={20} />
        </Box>
      </Box>

      <Box style={styles.options}>
        <Box style={styles.item}>
          <FontAwesome5 name={'calendar-day'} style={styles.icon} size={15} />
          <Text style={styles.title}>Agenda</Text>
        </Box>
        <Box style={styles.arrow}>
          <Ionicons name={'arrow-forward'} style={styles.arrowIcon} size={20} />
        </Box>
      </Box>

      <Box style={styles.options}>
        <Box style={styles.item}>
          <Ionicons name={'videocam'} style={styles.icon} size={15} />
          <Text style={styles.title}>Ao vivo</Text>
        </Box>
        <Box style={styles.arrow}>
          <Ionicons name={'arrow-forward'} style={styles.arrowIcon} size={20} />
        </Box>
      </Box>

      <Box style={styles.options}>
        <Box style={styles.item}>
          <MaterialIcons name={'library-books'} style={styles.icon} size={15} />
          <Text style={styles.title}>Nossas páginas</Text>
        </Box>
        <Box style={styles.arrow}>
          <Ionicons name={'arrow-forward'} style={styles.arrowIcon} size={20} />
        </Box>
      </Box>
    </View>
  );
}