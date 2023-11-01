import { StyleSheet } from "react-native";
import { Box, ScrollView, Text, VStack } from "native-base";
import CarouselVideo from "../components/CarouselVideo";

import sermons from './../assets/json/sermon.json';

export default function Video() {
  return(
    <ScrollView style={styles.container}>
      <Box>
        <Text style={styles.title}>Em destaque</Text>
        <CarouselVideo data={sermons}/>
      </Box>

      <Box>
        <Text style={styles.title}>Em destaque</Text>
        <CarouselVideo data={sermons}/>
      </Box>

      <Box>
        <Text style={styles.title}>Em destaque</Text>
        <CarouselVideo data={sermons}/>
      </Box>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '5%',
    backgroundColor: '#000',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 20,
    justifyContent: 'flex-start'
  },
});