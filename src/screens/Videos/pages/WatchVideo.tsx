import React, { useCallback, useState } from "react";
import { ActivityIndicator, View, Text } from "react-native";
import YoutubeIframe from 'react-native-youtube-iframe';
import * as ScreenOrientation from 'expo-screen-orientation';

import { VIDEO_HEIGHT, VIDEO_WIDTH, styles } from "../styles/WatchVideo";
import { THEME } from "../../../styles/theme";

export function WatchVideo({ route }) {
  const { video } = route.params; 
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
        {!videoReady && <ActivityIndicator color={THEME.colors.yellow[400]}/>}
      </View>
      <View style={styles.descriptionPlayer}>
        <Text style={styles.title}>
          {video.title}
        </Text>
        <Text style={styles.speaker}>
          {video.author}
        </Text>
        <Text style={styles.description}>
          {video.description}
        </Text>
      </View>
    </View>
  );
}