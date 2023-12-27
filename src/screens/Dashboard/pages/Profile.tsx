import { useEffect } from "react";
import { Box, VStack, Image, Text, Button, Icon } from "native-base";
import { MaterialIcons } from 'react-native-vector-icons';

import { useAuth } from "../../../contexts/auth";
import { loadUser } from "../../../services/UserService";
import profileImage from './../../../assets/images/profile.jpg';
import { styles } from "../styles/Profile";

export default function Profile() {
  const {user, signOut} = useAuth();
  // const user = {
  //   name: "Tiago Barbosa",
  //   email: 'tiagobarbosa02@outlook.com'
  // }

  useEffect(() => {
    async function getUser() {
      const teste = await loadUser(parseInt(user.id))
      console.log("teste", teste);
    }
    getUser()
  })

  return (
    <VStack style={styles.container}>
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
    </VStack>
  );
}