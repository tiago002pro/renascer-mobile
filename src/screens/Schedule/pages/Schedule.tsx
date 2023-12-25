import React from "react";
import { FlatList, Text, VStack } from "native-base";
import { useNavigation } from "@react-navigation/native";

import { ScheduleComponent } from "../components/ScheduleComponent";
import { styles } from "../styles/Schedule";

type Schedule = {
  id: string,
  title: string,
  startDate: Date,
  endDate: Date,
  address: string,
  about: string,
  image: string,
  registration: boolean,
}

const events: Schedule[] = [
  {
    id: '1',
    title: 'Tua presença vale mais',
    startDate: new Date(),
    endDate: new Date(),
    address: 'Avenida dos Holandeses, 5 - Calhau, São Luís - MA, 65071-380-Brasil',
    about: 'Musical de Natal | De Glória Em Glória - O Nascimento.',
    image: 'https://firebasestorage.googleapis.com/v0/b/renascer-app.appspot.com/o/CONF-2.jpg?alt=media&token=b656fbc2-be7e-4278-b180-1ac3a71a1a57',
    registration: true,
  },
  {
    id: '2',
    title: 'Convite da trindade',
    startDate: new Date(),
    endDate: new Date(),
    address: 'Avenida dos Holandeses, 5 - Calhau, São Luís - MA, 65071-380-Brasil',
    about: 'Musical de Natal | De Glória Em Glória - O Nascimento.',
    image: 'https://firebasestorage.googleapis.com/v0/b/renascer-app.appspot.com/o/CONF-40.jpg?alt=media&token=9e279ccb-38ff-4570-9c3b-f58548a3e9ef',
    registration: false,
  },
  {
    id: '3',
    title: 'Hebreus 1',
    startDate: new Date(),
    endDate: new Date(),
    address: 'Avenida dos Holandeses, 5 - Calhau, São Luís - MA, 65071-380-Brasil',
    about: 'Musical de Natal | De Glória Em Glória - O Nascimento.',
    image: 'https://firebasestorage.googleapis.com/v0/b/renascer-app.appspot.com/o/CONF-5.jpg?alt=media&token=778d6bd0-3b51-4ea3-8d2f-252d202d5c35',
    registration: true,
  },
]

export function Schedule() {
  const navigation: any = useNavigation();
  // React.useLayoutEffect(() => {
  //   navigation.setOptions({ headerShown: true });
  // })

  return (
    <VStack style={styles.container}>
      <Text style={styles.title}>Próximos eventos</Text>
      <FlatList
        data={events}
        renderItem={
          ({item}) => <ScheduleComponent item={item} />
        }
        keyExtractor={item => item.id}
      />
    </VStack>
  );
}