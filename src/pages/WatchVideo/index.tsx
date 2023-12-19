import React, { useCallback, useState } from "react";
import { ActivityIndicator, View, Text } from "react-native";
import YoutubeIframe from 'react-native-youtube-iframe';
import * as ScreenOrientation from 'expo-screen-orientation';

import { VIDEO_HEIGHT, VIDEO_WIDTH, styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

export function WatchVideo({ route }) {
  const navigation: any = useNavigation()
  const { video } = route.params;

  React.useLayoutEffect(() => {
    navigation.getParent().setOptions({ headerShown: false })
  })

  React.useLayoutEffect(() => {
    navigation.setOptions({ title: video.title })
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
          videoId={video.videoId}
          width={VIDEO_WIDTH}
          height={videoReady ? VIDEO_HEIGHT : 0}
          onReady={() => setVideoReady(true)}
          onFullScreenChange={onFullScreenChange}
        />
        {!videoReady && <ActivityIndicator color={'red'}/>}
      </View>
      <View style={styles.descriptionPlayer}>
        <Text style={styles.title}>
          {video.title}
        </Text>
        <Text style={styles.speaker}>
          {video.speaker}
        </Text>
        <Text style={styles.description}>
          {video.description}
        </Text>
      </View>
    </View>
  );
}