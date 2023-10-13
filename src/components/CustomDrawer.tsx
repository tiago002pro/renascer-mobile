import { StyleSheet } from 'react-native';
import { Text, Image, Box, Button, View } from "native-base";
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { MaterialIcons } from 'react-native-vector-icons';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

import profileImage from './../assets/profile.jpg';
import React from 'react';

export default function CustomDrawer(props) {
  const navigation: any = useNavigation()

  function openScreen() {
    navigation.navigate('Profile')
  }

  return(
    <SafeAreaView style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <Button style={styles.container} onPress={openScreen}>
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
          onPress={() => navigation.navigate('Login')}
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