import { Box, ScrollView } from "native-base";
import React from "react";
import BannerVideo from "../../components/BannerVideo";

export default function Videos() {
  return (
    <ScrollView flex={1} padding={"5%"} backgroundColor={"backgroudVideo"}>
      <Box safeArea>
        <BannerVideo/>
      </Box>
    </ScrollView>
  )
}