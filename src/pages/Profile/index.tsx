import { Box, Image, Text, VStack } from "native-base";

import profileImage from './../../assets/profile.jpg';

export default function Profile() {
  return (
    <VStack 
      flex={1}
      background={"white"}
      >
      <Box 
        justifyContent={"center"}
        alignItems={"center"}
        backgroundColor={"blue.100"}
        flex={1}
        borderBottomRadius={150}
      >
        <Box
          h={110}
          w={110}
          borderRadius={110}
          backgroundColor={"white"}
          justifyContent={"center"}
          alignItems={"center"}
          mb={10}
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
        <Text fontSize={"lg"} fontFamily={"MontserratRegular"}>Tiago Barbosa</Text>
        <Text fontSize={"sm"} fontFamily={"MontserratRegular"}>tiagobarbosa02@outlook.com</Text>
      </Box>
      <Box flex={2}></Box>
    </VStack>
  );
}