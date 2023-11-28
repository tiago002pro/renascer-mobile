import { StyleSheet, Text } from "react-native";
import { Box, ScrollView, VStack } from "native-base";
import { THEME } from "../../../styles/theme";
import { useEffect, useState } from "react";
import { getAll } from "../../Sermons/service/SermonService";
import CarouselVideo from "../../../components/CarouselVideo";

export default function Videos() {
  const [sermons, setSermon] = useState('') as any[]

  useEffect(() => {
    async function getAllSermons() {
      const result = await getAll()
      setSermon(result)
    }
    getAllSermons()
  }, [])

  return (
    <VStack style={styles.container} safeArea>
      <ScrollView>
        <Box>
          <Text style={styles.title}>Em destaque</Text>
          <CarouselVideo data={sermons}/>
        </Box>
      </ScrollView>
    </VStack>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.colors.backgroud,
    alignItems: 'center',
  },
  title: {
    padding: '5%',
    fontSize: 20,
    fontWeight: 'bold',
    color: THEME.colors.white,
    justifyContent: 'flex-start'
  }
});