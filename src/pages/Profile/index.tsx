import { Box, Image, Text, VStack } from "native-base";

// import profileImage from './../../assets/profile.jpg';

export default function Profile() {
  return (
    <VStack 
      flex={1}
      background={"white"}
      safeArea
      >
      <Box 
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        backgroundColor={"blue.100"}
        flex={1}
        borderBottomRadius={150}
      >
        <Box
          h={100}
          w={100}
          borderRadius={100}
          backgroundColor={"black"}
          mt={10}
          mb={5}
        >
          {/* <Image source={profileImage}/> */}
        </Box>
        <Text>Tiago Barbosa</Text>
        <Text>tiagobarbosa02@outlook.com</Text>
      </Box>
      <Box flex={2}></Box>
    </VStack>
  );
}