import { Box, ScrollView } from "native-base";
import { FlatList } from 'react-native';
import React from "react";

import BannerVideo from "../../components/BannerVideo";
import DATA from './videos.json';

export default function Videos({navigation}) {
  return (
    <ScrollView flex={1} padding={"5%"} backgroundColor={"backgroudVideo"} horizontal={false}>
      <Box safeArea>
        <FlatList
          data={DATA}
          keyExtractor={(item) => item.id}
          nestedScrollEnabled={true}
          scrollEnabled={false}
          renderItem={
            ({item}) => 
            <BannerVideo
              navigation={navigation}
              video={item} 
            />
          }
        />
      </Box>
    </ScrollView>
  )
}