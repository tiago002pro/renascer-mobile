import { Text, VStack } from "native-base";

export default function WatchVideo({ route }) {
  const video = route.params.video
  return (
    <VStack flex={1} padding={"5%"} backgroundColor={"backgroudVideo"}>
      <Text>{video.title}</Text>
    </VStack>
  );
}