import { Box, Button, Image, Text, VStack } from "native-base";
import { MaterialIcons } from 'react-native-vector-icons';

import profileImage from './../../assets/profile.jpg';
import { THEME } from "../../styles/theme";

export default function Profile() {
  return (
    <VStack 
      flex={1}
      background={"white"}
    >
      <Box
        flex={1}
        justifyContent={"center"}
        alignItems={"center"}
        backgroundColor={"blue.100"}
        borderBottomRadius={110}
        paddingBottom={5}
        top={0}
      >
        <Box
          h={100}
          w={100}
          borderRadius={100}
          backgroundColor={"white"}
          justifyContent={"center"}
          alignItems={"center"}
          mb={5}
        >
          <Image
            source={profileImage}
            alt="Profile"
            h={100}
            w={100}
            borderRadius={100}
            justifyContent={"center"}
            alignItems={"center"}
          />
        </Box>
        <Text fontSize={"md"} >Tiago Barbosa</Text>
        <Text fontSize={"xs"} >tiagobarbosa02@outlook.com</Text>
      </Box>

      <Box p={"5%"} flex={2}>
        <Box
          backgroundColor={"backgroud"}
          borderRadius={10}
          w={"100%"}
        >
          <Box p={"5%"}>
            <Text fontSize={"sm"} fontFamily={"FuturaBold"} letterSpacing={.5}>Data de nascimento</Text>
            <Text fontSize={"sm"} fontFamily={"FuturaMedium"} letterSpacing={.5}>22/09/1996</Text>
          </Box>
          <Box p={"5%"} borderTopColor={"gray.200"} borderTopWidth={1}>
            <Text fontSize={"sm"} fontFamily={"FuturaBold"} letterSpacing={.5}>Endereço</Text>
            <Text fontSize={"sm"} fontFamily={"FuturaMedium"} letterSpacing={.5}>22/09/1996</Text>
          </Box>
        </Box>
      </Box>
      
      <Box
        pl={"5%"}
        pr={"5%"}
        bottom={10}
        justifyContent={"flex-end"}
      >
        <Button 
          w={"100%"}
          backgroundColor={"transparent"}
          _pressed={{
            backgroundColor: "blue.100",
            borderColor: "transparent",
          }}
        >
          <Box 
            display={"flex"}
            justifyContent={"center"}
            flexDirection={"row"}
            alignItems={"center"}
          >
            <MaterialIcons 
              name="delete"
              color={"blue"}
              size={THEME.fontSizes.lg}
            />
            <Text 
              marginLeft={2}
              fontSize={"md"}
              color={"blue.700"}
              fontFamily={"FuturaMedium"}
              letterSpacing={.5}
            >
              Excluir minha conta
            </Text>
          </Box>
        </Button>
      </Box>
    </VStack>
  );
}