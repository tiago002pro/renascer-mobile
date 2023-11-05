import React from 'react';
import { StyleSheet, TouchableOpacity  } from 'react-native';
import { Text, Image, Box, View } from "native-base";
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { MaterialIcons } from 'react-native-vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import { useAuth } from '../contexts/auth';
import { THEME } from '../styles/theme';
import profileImage from './../assets/images/profile.jpg';

export default function CustomDrawer(props) {
  const {user, signOut} = useAuth();
  const navigation: any = useNavigation()

  function goProfile() {
    navigation.navigate('stack', {screen: 'Profile'});
  }

  function substringValues(value: string): string {
    return value.length < 21 ? value : value.substring(0, 18) + "...";
  }

  return(
    <SafeAreaView style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <TouchableOpacity 
          style={styles.container}
          onPress={goProfile}
          activeOpacity={1}
        >
          <Box style={styles.userArea}>
            <Box style={styles.imageArea}>
              <Image source={profileImage} alt='' style={styles.image} />
            </Box>
            <Box style={styles.infoArea}>
              <Text fontSize={'xs'} fontWeight={'bold'} numberOfLines={1}>
                {substringValues(user?.name)}
              </Text>
              <Text fontSize={'xs'} numberOfLines={1}>
                {substringValues(user?.email)}
              </Text>
            </Box>
            <Box style={styles.iconArea}>
              <MaterialIcons name="keyboard-arrow-right" color={'#000'} size={30} />
            </Box>
          </Box>
        </TouchableOpacity >
        <DrawerItemList {...props}/>
      </DrawerContentScrollView>
      <View>
        <DrawerItem
          label="Sair"
          onPress={signOut}
          icon={({color, size}) => <MaterialIcons name="logout" color={color} size={size} />}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginRight: 10,
    padding: 0,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userArea: {
    backgroundColor: THEME.colors.gray[100],
    width: '100%',
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 5,
  },
  imageArea: {
    marginRight: 10,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 40
  },
  infoArea: {
    position: 'relative',
  },
  iconArea: {
    position: 'absolute',
    right: 0
  }
})