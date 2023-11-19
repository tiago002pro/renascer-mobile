import { StyleSheet, Text } from "react-native";
import { Box, VStack } from "native-base";
import { THEME } from "../../../styles/theme";

export default function Videos() {
  return (
    <VStack style={styles.container} safeArea>
      <Box>
        <Text style={styles.title}>Palavras</Text>
      </Box>
    </VStack>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.colors.backgroud,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    padding: '5%',
    fontSize: 20,
    fontWeight: 'bold',
    color: THEME.colors.white,
    justifyContent: 'flex-start'
  }
});