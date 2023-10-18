import { StyleSheet } from 'react-native';
import { Text, Image, Box, Button, View } from "native-base";
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { MaterialIcons } from 'react-native-vector-icons';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from "@react-native-async-storage/async-storage";

import profileImage from './../assets/profile.jpg';
import React from 'react';

export default function CustomDrawer(props) {
  const navigation: any = useNavigation()

  async function logout() {
    const token = await AsyncStorage.getItem('token')
    const userId = await AsyncStorage.getItem('userId')
    console.log("CustomDrawer (logout) token => ", token);
    console.log("CustomDrawer (logout) userId => ", userId);
    await AsyncStorage.removeItem('token')
    await AsyncStorage.removeItem('userId')
    navigation.navigate('Profile', {screen: 'Login'})
  }

  return(
    <SafeAreaView style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <Button style={styles.container} onPress={() => {}}>
          <Box style={styles.userArea} backgroundColor={'gray.100'}>
            <Box style={styles.imageArea}>
              <Image source={profileImage} alt='' style={styles.image} />
            </Box>
            <Box>
              <Text fontSize={'xs'} fontWeight={'bold'}>Tiago Barbosa</Text>
              <Text fontSize={'xs'}>tiagobarbosa02@outlook.com</Text>
            </Box>
          </Box>
        </Button>
        <DrawerItemList {...props}/>
      </DrawerContentScrollView>
      <View>
        <DrawerItem
          label="Sair"
          onPress={logout}
          icon={({color, size}) => <MaterialIcons name="logout" color={color} size={size} />}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 0,
    padding: 0,
    backgroundColor: 'transparent'
  },
  userArea: {
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20
  },
  imageArea: {
    marginRight: 10,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 40
  }
})