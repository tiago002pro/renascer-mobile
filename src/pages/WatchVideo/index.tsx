import React, { useCallback, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import YoutubeIframe from 'react-native-youtube-iframe';
import * as ScreenOrientation from 'expo-screen-orientation';

import { VIDEO_HEIGHT, VIDEO_WIDTH, styles } from "./styles";

export function WatchVideo() {
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
    </View>
  );
}