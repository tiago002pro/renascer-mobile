import { Box, VStack, Image, Text, Button, Icon } from "native-base";
import { useEffect } from "react";
import { StyleSheet } from "react-native";
import { Feather } from 'react-native-vector-icons';
import { MaterialIcons } from 'react-native-vector-icons';
import { THEME } from "./../../styles/theme";

import profileImage from './../../assets/images/profile.jpg';
import { useAuth } from "../../contexts/auth";
import { loadUser } from "../../services/UserService";


export default function Profile() {
  const {user} = useAuth();

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
          backgroundColor={'transparent'}
          leftIcon={<Icon as={MaterialIcons} name="delete" color={'red.500'} size={'lg'}/>}
          _text={{
            color: 'red.500',
            fontSize: 'md'
          }}
          _pressed={{
            backgroundColor: 'gray.200',
          }}
        >
         Excluir minha conta
        </Button>
      </Box>
    </VStack>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '5%',
    backgroundColor: THEME.colors.white,
    display: 'flex',
    justifyContent: 'space-between'
  },
  profile: {
    width: '100%',
    padding: '10%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: THEME.colors.orange[400],
    borderRadius: 5,
    shadowOffset: {width: -2, height: 5},  
    shadowColor: '#171717',  
    shadowOpacity: 0.2,  
    shadowRadius: 3,
  },
  imageArea: {
    padding: '1%',
    borderRadius: 100,
    marginBottom: 30,
    backgroundColor: '#fff'
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  name: {
    fontSize: THEME.fontSizes.lg,
    fontWeight: '500',
    color: 'white',
  },
  text: {
    fontSize: THEME.fontSizes.sm,
  },
  data: {
    marginTop: 30,
  },
  info: {
    backgroundColor: THEME.colors.gray[200],
    borderRadius: 5,
  },
  infoArea: {
    display: 'flex',
    flexDirection: 'row',
  },
  iconArea: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: '5%'
  },
  icon: {
    fontSize: 30
  },
  description: {
    justifyContent: 'center',
  },
  footer: {
    marginBottom: '5%',
  },
});