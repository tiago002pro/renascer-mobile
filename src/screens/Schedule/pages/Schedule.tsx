import React, { useEffect, useState } from "react";
import { Box, FlatList, Text, VStack, View } from "native-base";
import { FontAwesome5 } from '@expo/vector-icons';

import ScheduleService from "../service/ScheduleService";

import { ScheduleComponent } from "../components/ScheduleComponent";

import { THEME } from "../../../styles/theme";
import { styles } from "../styles/Schedule";

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
  const [schedules, setSchedules] = useState(null);
  const [withoutSchedules, setWithoutSchedules] = useState(null);

  useEffect(() => {
    async function getSchedule() {
      const result = await ScheduleService.getAllByValidDeadline()
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

  return (
    <VStack style={styles.container}>
      {withoutSchedules ? 
        <View>
          <Text style={styles.title}>Próximos eventos</Text>
          <FlatList
            data={schedules}
            renderItem={
              ({item}) => <ScheduleComponent item={item} />
            }
            keyExtractor={(item) => item.toString()}
          />
        </View>
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