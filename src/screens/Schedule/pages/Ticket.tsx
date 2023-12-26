import React, { useEffect, useState } from "react";
import { Box, Button, Icon, Image, Text, VStack, View } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import moment from 'moment';

import ButtonComponent from "../../../components/ButtonComponent";
import { styles } from "../styles/Ticket";
import { THEME } from "../../../styles/theme";

export function Ticket({ route }) {
  const navigation: any = useNavigation();
  const { ticket } = route.params;
  
  const [dateFirst, setDateFirst] = useState('');
  const [dateSecound, setDateSecound] = useState('');

  React.useLayoutEffect(() => {
    // navigation.getParent().setOptions({ headerShown: false });
    navigation.setOptions({ title: ticket.title });
  })

  useEffect(() => {
    function changeFormatDateFirst() {
      const startDate: string = moment(ticket.startDate).format('DD [de] MMMM, [das] h[h]mm [às]');
      const endTime: string = moment(ticket.endDate).format(' h[h]mm.');
      setDateFirst(startDate + endTime);
    }

    function changeFormatDateSecound() {
      const date: string = moment(ticket.startDate).format('[Dia] DD.MM, dddd, [às] h[h]mm.');
      setDateSecound(date);
    }

    changeFormatDateFirst()
    changeFormatDateSecound()
  }, [])

  return(
    <VStack style={styles.container}>
      <View style={styles.data}>
        <Image 
          style={styles.image}
          source={{uri: ticket.image}}
          alt={ticket.title}
        />
        <View style={styles.description}>
          <Text style={styles.title}>
            {ticket.title}
          </Text>

          <Box style={styles.information}>
            <Box style={styles.icon}>
              <MaterialCommunityIcons name="calendar-blank" color={THEME.colors.yellow[400]} size={25}/>
            </Box>
            <Box style={styles.info}>
              <Text style={styles.text}>
                {dateFirst}
              </Text>

              <Button
                onPress={() => {}}
                rightIcon={<Icon as={MaterialCommunityIcons} name="arrow-right" size="sm" color={'yellow.400'}/>}
                p={0} justifyContent={'flex-start'} bg={'transparent'} mt={2}
                _text={{
                  fontSize: THEME.fontSizes.sm,
                  lineHeight: THEME.fontSizes.sm,
                  color: 'yellow.400'
                }}
                _pressed={{
                  backgroundColor: "transparent",
                  borderColor: "transparent",
                }}
              >
                Salvar na agenda
              </Button>

            </Box>
          </Box>

          <Box style={styles.information}>
            <Box style={styles.icon}>
              <MaterialIcons name="location-on" color={THEME.colors.yellow[400]} size={25}/>
            </Box>
            <Box style={styles.info}>
              <Text style={styles.text}>
                {ticket.address}
              </Text>

              <Button
                onPress={() => {}}
                rightIcon={<Icon as={MaterialCommunityIcons} name="arrow-right" size="sm" color={'yellow.400'}/>}
                p={0} justifyContent={'flex-start'} bg={'transparent'} mt={2}
                _text={{
                  fontSize: THEME.fontSizes.sm,
                  lineHeight: THEME.fontSizes.sm,
                  color: 'yellow.400'
                }}
                _pressed={{
                  backgroundColor: "transparent",
                  borderColor: "transparent",
                }}
              >
                Veja a rota no mapa
              </Button>

            </Box>
          </Box>

          <Box style={styles.boxLine}>
            <Box style={styles.line}/>
          </Box>

          <Box style={styles.information}>
            <Box style={styles.icon}>
              <MaterialCommunityIcons name="text-box" color={THEME.colors.yellow[400]} size={25}/>
            </Box>
            <Box style={styles.info}>
              <Text style={styles.subtitle}>Sobre</Text>
              <Text style={styles.text}>
                {ticket.description}
              </Text>
              <Text style={styles.date}>
                {dateSecound}
              </Text>
            </Box>
          </Box>

        </View>
      </View>
      {ticket.registration ? 
        <VStack style={styles.footer}>
          <ButtonComponent
            children={"Ingressos"}
            bg={'yellow.400'}
            color={THEME.colors.backgroud}
            bntFunction={() => {}}
            textTransform={'capitalize'}
            w={'100%'}
          />
        </VStack>
        : null
      }
    </VStack>
  );
}