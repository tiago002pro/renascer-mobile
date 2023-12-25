import { useEffect } from "react";
import { Box, VStack, Image, Text, Button, Icon } from "native-base";
import { Feather, MaterialIcons } from 'react-native-vector-icons';

import { useAuth } from "../../../contexts/auth";
import { loadUser } from "../../../services/UserService";
import profileImage from './../../../assets/images/profile.jpg';
import { styles } from "../styles/Profile";

export default function Profile() {
  const {user, signOut} = useAuth();

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
          <Text style={styles.name}>{user?.name}</Text>
          <Text style={styles.text} color={'white'}>{user?.email}</Text>
        </Box>

        <Box style={styles.data}>
          <Box style={styles.info}>
            <Box style={styles.infoArea}>
              <Box style={styles.iconArea}>
                <Feather name={'calendar'} style={styles.icon}/>
              </Box>
              <Box style={styles.description}>
                <Text style={styles.text} fontWeight={'bold'}>Data de nascimento</Text>
                <Text style={styles.text}>22/09/1996</Text>
              </Box>
            </Box>
            <Box style={styles.infoArea}>
              <Box style={styles.iconArea}>
                <Feather name={'phone'} style={styles.icon}/>
              </Box>
              <Box style={styles.description}>
                <Text style={styles.text} fontWeight={'bold'}>Telefone</Text>
                <Text style={styles.text}>+55 (44) 98804-1230</Text>
              </Box>
            </Box>
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