import { useEffect, useState } from "react";
import { Box, VStack, Image, Text, Button, Icon, View, ScrollView, IconButton } from "native-base";
import { TouchableOpacity } from "react-native";
import Animated from "react-native-reanimated";
import { MaterialIcons, SimpleLineIcons, Ionicons } from 'react-native-vector-icons';

import { useAuth } from "../../../contexts/auth";
import UserService from "../../../services/UserService";

import InfoProfileComponent from "../components/InfoProfileComponent";

import { THEME } from "../../../styles/theme";
import { styles } from "../styles/Profile";

import profileImage from './../../../assets/images/profile.png';
import data from '../helper/ProfileFormData';

export function Profile({ navigation }) {
  const {user} = useAuth();
  const [person, setPerson] = useState(null);
  const [currentSection, setCurrentSection] = useState(null);
  const [load, setLoad] = useState(null)

  async function goToForm(route): Promise<void> {
    navigation.navigate({
      name: route,
      params: {
        person: person,
      },
    });
  }

  async function getUser() {
    // if (!!load) {
      const data = await UserService.loadUser(parseInt(user.id))
      setPerson(data?.person)
    // }
  }

  useEffect(() => {
    function onInit() {
      navigation.addListener('focus', () => setLoad(!load))
      getUser()
    }
    onInit()
  }, [load, navigation])

  return (
    <VStack style={styles.container}>
      <ScrollView>
        <Box>
          <Box style={styles.profile}>
            <Box style={styles.imageArea}>
              {person?.profileImage ? 
                <Image
                  source={{uri: person?.profileImage}}
                  alt="User"
                  style={styles.image}
                />
                :
                <Ionicons
                  name="person-circle"
                  size={130}
                  color={THEME.colors.primary}
                />
              }
              {/* <Box position={'absolute'} bottom={0} right={0}>
                <IconButton
                  padding={3}
                  backgroundColor={THEME.colors.backgroud}
                  icon={<Icon as={MaterialIcons} name="add-a-photo"/>}
                  borderRadius={'full'}
                  _icon={{
                    color: THEME.colors.yellow[400],
                    size: 5
                  }}
                />
              </Box> */}
            </Box>
            <Box style={styles.textArea}>
              <Text style={styles.name}>{user?.name}</Text>
              <Text style={styles.email}>{user?.email}</Text>
            </Box>
          </Box>
        </Box>

        {data.map(({title, icon, vectorIcon, route, key}) => {
          return (
            <TouchableOpacity
              key={key}
              onPress={() => {
                setCurrentSection(key === currentSection ? null : key)
              }}
              activeOpacity={0.8}
              style={styles.accordion}
            >
              <Box style={styles.area}>
                <Box style={styles.data}>
                  <Box style={styles.iconArea}>
                    <Icon
                      as={vectorIcon}
                      name={icon}
                      color={THEME.colors.white}
                      size={7}
                    />
                  </Box>

                  <View style={styles.infoArea}>
                    <Text style={styles.title}>{title}</Text>
                  </View>
                </Box>

                <Animated.View
                  style={
                    [styles.arrowArea, {
                      transform: [{rotate: key === currentSection ? '180deg' : '0deg'}]
                    }]
                  }
                >
                  <SimpleLineIcons name={'arrow-down'} style={styles.arrowIcon} size={20} />
                </Animated.View>
              </Box>

              {key === currentSection && (
                <View style={styles.component}>
                  <InfoProfileComponent
                    section={key}
                    person={person}
                  />

                  <View style={styles.editBtn}>
                    <IconButton
                      onPress={() => goToForm(route)}
                      style={styles.iconDditBtn}
                      icon={<Icon as={MaterialIcons} name="edit"/>}
                      _icon={{
                        color: THEME.colors.backgroud,
                        size: 5
                      }}
                      _pressed={{
                        bg: 'yellow.400:alpha.20'
                      }}
                    />
                  </View>
                </View>
              )}
            </TouchableOpacity>
          )
        })}
      </ScrollView>
    </VStack>
  );
}