import { StyleSheet } from 'react-native';
import { Text, Image, Box, Button } from "native-base";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";

import profileImage from './../assets/profile.jpg';

export default function CustomDrawer(props) {
  return(
    <DrawerContentScrollView {...props}>
      <Button style={styles.container}>
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