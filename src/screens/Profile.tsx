import { Box, VStack, Image, Text } from "native-base";
import { StyleSheet } from "react-native";

import profileImage from './../assets/profile.jpg';

export default function ProfileNew() {
  return(
    <VStack style={styles.container}>
      <Box>
        <Image
          source={profileImage}
          alt="Profile"
          style={styles.image}
        />
        <Text fontSize={"md"} >Tiago Barbosa</Text>
        <Text fontSize={"sm"} >tiagobarbosa02@outlook.com</Text>
      </Box>

      <Box w={'100%'}>
        <Box
          backgroundColor={"backgroudLight"}
          borderRadius={10}
          w={"100%"}
        >
          <Box p={"5%"}>
            <Text fontSize={"sm"} fontWeight={'bold'}>Data de nascimento</Text>
            <Text fontSize={"sm"}>22/09/1996</Text>
          </Box>
          <Box p={"5%"} borderTopColor={"gray.200"} borderTopWidth={1}>
            <Text fontSize={"sm"} fontWeight={'bold'}>Telefone</Text>
            <Text fontSize={"sm"}>+55 (44) 98804-1230</Text>
          </Box>
        </Box>
      </Box>
    </VStack>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '5%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  }
});