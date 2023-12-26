import React, { useEffect, useState } from "react";
import { Box, FlatList, Text, VStack, View } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from '@expo/vector-icons';

import { ScheduleComponent } from "../components/ScheduleComponent";
import { styles } from "../styles/Schedule";
import { getAllByValidDeadline } from "../../../services/ScheduleService";
import { THEME } from "../../../styles/theme";

type Schedule = {
  id: string,
  title: string,
  startDate: Date,
  endDate: Date,
  address: string,
  description: string,
  image: string,
  registration: boolean,
  deadline: Date,
}

export function Schedule() {
  const navigation: any = useNavigation();
  const [schedules, setSchedules] = useState('') as any[]
  const [withoutSchedules, setWithoutSchedules] = useState('') as any[]

  useEffect(() => {
    async function getSchedule() {
      const result = await getAllByValidDeadline()
      setSchedules(result)
    }

    async function checkSchedule() {
      if (schedules && schedules.length > 0) {
        setWithoutSchedules(true)
      } else {
        setWithoutSchedules(false)
      }
    }

    getSchedule()
    checkSchedule()
  }, [])

  // React.useLayoutEffect(() => {
  //   navigation.setOptions({ headerShown: true });
  // })

  return (
    <VStack style={styles.container}>
      <Text style={styles.title}>Próximos eventos</Text>
      {withoutSchedules ? 
        <FlatList
          data={schedules}
          renderItem={
            ({item}) => <ScheduleComponent item={item} />
          }
          keyExtractor={(item) => item.toString()}
        />
      :
        <View alignItems={'center'} justifyContent={'center'} mt={'50%'} >
          <Box mb={3}>
            <FontAwesome5 name="calendar-times" color={THEME.colors.yellow[400]} size={50}/>
          </Box>
          <Text color={'white'} fontSize={"lg"} textAlign={'center'}>Nenhum evento</Text>
          <Text color={'white'} fontSize={"lg"} textAlign={'center'}>foi encontrado</Text>
        </View>
      }
    </VStack>
  );
}