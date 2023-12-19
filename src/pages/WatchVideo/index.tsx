import React, { useCallback, useState } from "react";
import { ActivityIndicator, View, Text } from "react-native";
import YoutubeIframe from 'react-native-youtube-iframe';
import * as ScreenOrientation from 'expo-screen-orientation';

import { VIDEO_HEIGHT, VIDEO_WIDTH, styles } from "./styles";

export function WatchVideo({ navigation }) {
  React.useLayoutEffect(() => {
    navigation.getParent().setOptions({ headerShown: false })
  })

  React.useLayoutEffect(() => {
    navigation.setOptions({ title: 'Joy To The World (You Are My Joy)' })
  })

  const [videoReady, setVideoReady] = useState(false);

  const onFullScreenChange = useCallback((isFullScreen: boolean) => {
    if (isFullScreen) {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    }  else {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
    }
  }, [])

  return(
    <View style={styles.container}>
      <View style={styles.player}>
        <YoutubeIframe
          videoId="k7iPgWgeNsk"
          width={VIDEO_WIDTH}
          height={videoReady ? VIDEO_HEIGHT : 0}
          onReady={() => setVideoReady(true)}
          onFullScreenChange={onFullScreenChange}
        />
        {!videoReady && <ActivityIndicator color={'red'}/>}
      </View>
      <View style={styles.descriptionPlayer}>
        <Text style={styles.title}>
          Joy To The World (You Are My Joy)
        </Text>
        <Text style={styles.speaker}>
          Rend Collective
        </Text>
        <Text style={styles.description}>
          Music video by Rend Collective performing Joy To The World (You Are My Joy). (C) 2014 Rend Collective
        </Text>
      </View>
    </View>
  );
}