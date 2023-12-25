import { Box, Image, Text } from "native-base";
import { StyleSheet, Dimensions, TouchableWithoutFeedback } from 'react-native';
import { THEME } from "../../../../../styles/theme";
import { useEffect, useState } from "react";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";

const { width: screenWidth } = Dimensions.get('window');

export default function Schedule({item}) {
  const navigation: any = useNavigation()

  async function goTicket(ticket: any): Promise<void> {
    console.log('ticket', ticket);
    
    navigation.navigate('Ticket', {
        ticket: ticket
      });
  }

  const [date, setDate] = useState('');
  useEffect(() => {
    function changeFormatDate() {
      const date: string = moment(item.startDate).format('ddd, DD MMM [•] h[h]mm');
      setDate(date);
    }
    changeFormatDate()
  }, [])

  return (
    <TouchableWithoutFeedback onPress={() => goTicket(item)}>
      <Box style={styles.container}>
        <Box style={styles.imageContainer}>
          <Image
            source={{uri: item.image ? item.image : null}}
            alt={item.title}
            style={styles.image}
          />
        </Box>

        <Box style={styles.description}>
          <Box style={styles.data}>
            <Text style={styles.date}>{date}</Text>
            <Text style={styles.title}>{item.title}</Text>
          </Box>

          {item.registration ? 
            <Box style={styles.registrationArea}>
              <Box style={styles.registration}>
                <Text style={styles.registrationText}>Incrições abertas</Text>
              </Box>
            </Box> 
            : null
          }

        </Box>
      </Box>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 20,
  },
  imageContainer: {
    width: screenWidth * .35,
    height: screenWidth * .20,
    marginRight: 10,
  },
  image: {
    width: screenWidth * .35,
    height: screenWidth * .20,
    borderRadius: 5,
  },
  description: {
    width: screenWidth * .65,
    height: screenWidth * .20,
    padding: 0,
    margin: 0,
    display: 'flex',
  },
  date: {
    color:  THEME.colors.yellow[400],
    fontSize: 10,
    textTransform: 'uppercase',
  },
  title: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold'
  },
  data: {
    width: screenWidth * .65,
    height: ((screenWidth * .20) - 30),
  },
  registrationArea: {
    width: screenWidth * .65,
  },
  registration: {
    width: screenWidth * .30,
    alignItems: 'center',
    backgroundColor: THEME.colors.yellow[400],
    padding: 5,
    borderRadius: 10,
  },
  registrationText: {
    fontSize: THEME.fontSizes.sm - 2,
    lineHeight: THEME.fontSizes.sm - 2,
    color: THEME.colors.backgroud,
  }
});