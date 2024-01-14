import React, { useEffect, useState } from "react";
import { Box, ScrollView, Text, VStack, View } from "native-base";
import { FontAwesome5 } from '@expo/vector-icons';

import VideoService from "../service/VideoService";

import { SlideVideoComponent } from "../components/SlideVideo";

import { THEME } from "../../../styles/theme";
import { styles } from '../styles/Videos';

export function Videos() {
  const [familyService, setFamilyService] = useState(null);
  const [celebrationService, setCelebrationService] = useState(null);

  useEffect(() => {
    async function getAllSermon() {
      const result = await VideoService.getAllByCategory('FAMILY')
      setFamilyService(result)
    }

    async function getAllMusic() {
      const result = await VideoService.getAllByCategory('CELEBRATION')
      setCelebrationService(result)
    }
    
    getAllSermon()
    getAllMusic()
  }, [])

  function existVideos(): boolean {
    return (familyService && familyService.length > 0) || (celebrationService && celebrationService.length > 0)
  }

  return (
    <VStack style={styles.container} safeArea>
      <ScrollView>
        {familyService && familyService.length > 0 ?
          <Box style={styles.slide}>
            <SlideVideoComponent title={"Culto da familia"} data={familyService}/>
          </Box>
          : null
        }
        
        {celebrationService && celebrationService.length > 0 ?
          <Box style={styles.slide}>
            <SlideVideoComponent title={"Culto de celebração"} data={celebrationService}/>
          </Box>
          : null
        }

        {!existVideos() ?
          <View alignItems={'center'} justifyContent={'center'} mt={'50%'} >
            <Box mb={3}>
              <FontAwesome5 name="video-slash" color={THEME.colors.yellow[400]} size={50}/>
            </Box>
            <Text color={'white'} fontSize={"lg"} textAlign={'center'}>Nenhum vídeo</Text>
            <Text color={'white'} fontSize={"lg"} textAlign={'center'}>foi encontrado</Text>
          </View>
          :
          null
        }
      </ScrollView>
    </VStack>
  );
}