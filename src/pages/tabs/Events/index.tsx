import { StyleSheet, Text, View } from "react-native";
import { THEME } from "../../../styles/theme";
import { FlatList, VStack } from "native-base";
import { ScrollView } from "react-native-gesture-handler";
import Schedule from "./components/Schedule";

type Event = {
  id: string,
  title: string,
  time: string,
  image: string,
}

const events: Event[] = [
  {
    id: '1',
    title: 'Tua presença vale mais',
    time: 'TER, 28 NOV • 14:15',
    image: 'https://firebasestorage.googleapis.com/v0/b/renascer-app.appspot.com/o/CONF-2.jpg?alt=media&token=b656fbc2-be7e-4278-b180-1ac3a71a1a57'
  },
  {
    id: '2',
    title: 'Convite da trindade',
    time: 'TER, 28 NOV • 14:15',
    image: 'https://firebasestorage.googleapis.com/v0/b/renascer-app.appspot.com/o/CONF-40.jpg?alt=media&token=9e279ccb-38ff-4570-9c3b-f58548a3e9ef'
  },
  {
    id: '3',
    title: 'Hebreus 1',
    time: 'TER, 28 NOV • 14:15',
    image: 'https://firebasestorage.googleapis.com/v0/b/renascer-app.appspot.com/o/CONF-5.jpg?alt=media&token=778d6bd0-3b51-4ea3-8d2f-252d202d5c35'
  },
]

export default function Events() {
  return (
    <VStack style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Próximos eventos</Text>
        <FlatList
          data={events}
          renderItem={({item}) => <Schedule item={item} />}
          keyExtractor={item => item.id}
        />
      </ScrollView>
    </VStack>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.colors.backgroud,
    padding: '5%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: THEME.colors.white,
    marginBottom: 20,
  }
});