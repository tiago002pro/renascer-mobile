import { useEffect, useState } from "react";
import { TouchableWithoutFeedback } from 'react-native';
import { Box, Image, Text } from "native-base";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";

import { styles } from "../styles/ScheduleComponent";

export function ScheduleComponent({item}) {
  const navigation: any = useNavigation()
  const [date, setDate] = useState('');

  async function goTicket(ticket: any): Promise<void> {
    navigation.navigate('Ticket', {
      ticket: ticket
    });
  }

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