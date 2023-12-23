import moment from 'moment'
import 'moment/locale/pt-br' 
import React, { useEffect, useState } from "react";
import { Box, Button, Icon, Image, Text, VStack, View } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

import { styles } from "./styles";
import { THEME } from "../../styles/theme";
import ButtonComponent from "../../components/ButtonComponent";

export function Ticket({ route }) {
  const navigation: any = useNavigation();
  const { ticket } = route.params;
  const [date, setDate] = useState('');

  React.useLayoutEffect(() => {
    navigation.getParent().setOptions({ headerShown: false });
  })

  React.useLayoutEffect(() => {
    navigation.setOptions({ title: ticket.title });
  })

  useEffect(() => {
    function changeFormatDate() {
      const date: string = moment(ticket.date).format('[Dia] DD.MM, dddd, [às] h[h]mm.');
      setDate(date);
    }
    changeFormatDate()
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
                23 de dezembro, das 19:20h às 21:30h
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
                {ticket.about}
              </Text>
              <Text style={styles.date}>
                {date}
              </Text>
            </Box>
          </Box>

        </View>
      </View>
      <VStack style={styles.footer} safeArea>
        <ButtonComponent
          children={"Ingressos"}
          bg={'yellow.400'}
          color={THEME.colors.backgroud}
          bntFunction={() => {}}
          textTransform={'capitalize'}
          w={'100%'}
        />
      </VStack>
    </VStack>
  );
}