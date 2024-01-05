import { useEffect, useState } from "react";
import { Box, VStack, Image, Text, Button, Icon, View, ScrollView, IconButton } from "native-base";
import { MaterialIcons, SimpleLineIcons } from 'react-native-vector-icons';

import { useAuth } from "../../../contexts/auth";
import { loadUser } from "../../../services/UserService";
import profileImage from './../../../assets/images/profile.jpg';
import { styles } from "../styles/Profile";
import data from './AccordionProfileForm';
import { TouchableOpacity } from "react-native";
import Animated from "react-native-reanimated";
import { BasicDataComponent } from "../components/BasicDataComponent";
import { THEME } from "../../../styles/theme";
import { useNavigation } from "@react-navigation/native";

export default function Profile() {
  const {user, signOut} = useAuth();
  const [currentIndex, setCurrentIndex] = useState(null);
  const navigation: any = useNavigation();

  // const user = {
  //   name: "Tiago Barbosa",
  //   email: 'tiagobarbosa02@outlook.com'
  // }

  async function goEdit(route): Promise<void> {
    navigation.navigate(route);
  }

  // useEffect(() => {
  //   async function getUser() {
  //     const teste = await loadUser(parseInt(user.id))
  //     console.log("teste", teste);
  //   }
  //   getUser()
  // })

  return (
    <VStack style={styles.container}>
      <ScrollView>
        <Box>
          <Box style={styles.profile}>
            <Box style={styles.imageArea}>
              <Image
                source={profileImage}
                alt="User"
                style={styles.image}
              />
            </Box>
            <Box style={styles.textArea}>
              <Text style={styles.name}>{user?.name}</Text>
              <Text style={styles.email}>{user?.email}</Text>
            </Box>
          </Box>
        </Box>

        {data.map(({title, icon, vectorIcon, editLink, subItens}, index) => {
          return (
            <TouchableOpacity
              key={title}
              onPress={() => {
                setCurrentIndex(index === currentIndex ? null : index)
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
                      color={THEME.colors.yellow[400]}
                      size={10}
                    />
                  </Box>

                  <View style={styles.infoArea}>
                    <Text style={styles.title}>{title}</Text>
                  </View>
                </Box>

                <Animated.View
                  style={
                    [styles.arrowArea, {
                      transform: [{rotate: index === currentIndex ? '180deg' : '0deg'}]
                    }]
                  }
                >
                  <SimpleLineIcons name={'arrow-down'} style={styles.arrowIcon} size={20} />
                </Animated.View>
              </Box>

              {index === currentIndex && (
                <View style={styles.component}>
                  <BasicDataComponent section={index}/>
                  <View style={styles.editBtn}>
                    <IconButton
                      onPress={() => goEdit(editLink)}
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

        <Box style={styles.footer}>
          <Button
            onPress={signOut}
            backgroundColor={'transparent'}
            leftIcon={<Icon as={MaterialIcons} name="logout" color={'red.500'} size={'lg'}/>}
            _text={{
              color: 'red.500',
              fontSize: 'md'
            }}
            _pressed={{
              backgroundColor: 'gray.200',
            }}
          >
          Sair
          </Button>
        </Box>
      </ScrollView>
    </VStack>
  );
}