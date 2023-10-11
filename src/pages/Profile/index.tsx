import React, { useEffect, useState } from "react";
import { Box, Button, Image, Text, VStack } from "native-base";
import { MaterialIcons } from 'react-native-vector-icons';
import AsyncStorage from "@react-native-async-storage/async-storage";

import profileImage from './../../assets/profile.jpg';
import { THEME } from "../../styles/theme";
import { load } from "../../services/UserService";
import { User } from "../../interface/User.interface";

export default function Profile() {
  const [user, setUser] = useState('') as any

  useEffect(() => {
    async function verifyLogin() {
      const userId = await AsyncStorage.getItem('userId')
      const data: User = await load(Number(userId))
      setUser(data)
    }
    verifyLogin()
  }, [])

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
        <Text fontSize={"md"} >{user.name}</Text>
        <Text fontSize={"xs"} >{user.login}</Text>
      </Box>

      <Box p={"5%"} flex={2}>
        <Box
          backgroundColor={"backgroudLight"}
          borderRadius={10}
          w={"100%"}
        >
          <Box p={"5%"}>
            <Text fontSize={"sm"} letterSpacing={.5}>Data de nascimento</Text>
            <Text fontSize={"sm"} letterSpacing={.5}>22/09/1996</Text>
          </Box>
          <Box p={"5%"} borderTopColor={"gray.200"} borderTopWidth={1}>
            <Text fontSize={"sm"} letterSpacing={.5}>Endereço</Text>
            <Text fontSize={"sm"} letterSpacing={.5}>22/09/1996</Text>
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
              color={THEME.colors.red[500]}
              size={THEME.fontSizes.lg}
            />
            <Text 
              marginLeft={2}
              fontSize={"md"}
              color={"red.500"}
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