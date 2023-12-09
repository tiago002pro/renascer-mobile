import { useEffect, useState } from "react";
import { StyleSheet, Text } from "react-native";
import { getAll } from "./service/SermonService";
import { Box, VStack } from "native-base";
import CarouselVideo from "../../components/CarouselVideo";
import { THEME } from "../../styles/theme";

export default function Sermons() {
  const [sermons, setSermon] = useState('') as any[]

  useEffect(() => {
    async function getAllSermons() {
      const result = await getAll()
      console.log("getAllSermons()", result);
      setSermon(result)
    }
    getAllSermons()
  }, [])

  return (
    <VStack style={styles.container} safeArea>
      <Box>
        <Text style={styles.title}>Em destaque</Text>
        <CarouselVideo data={sermons}/>
      </Box>
    </VStack>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.colors.backgroud,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    padding: '5%',
    fontSize: 20,
    fontWeight: 'bold',
    color: THEME.colors.white,
    justifyContent: 'flex-start'
  }
});