import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialIcons } from 'react-native-vector-icons';
import { StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Button } from 'native-base';
import { THEME } from './../styles/theme';

import Login from '../screens/Login';
import Profile from '../screens/Profile';
import Register from '../screens/Register';

const Stack = createNativeStackNavigator()

export default function StackRoutes() {
  const navigation: any = useNavigation()

  function openScreen() {
    navigation.navigate('Home')
  }

  return(
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name='home'
        component={Profile}
        options={{
          headerShown: true,
          title: "Meu perfil",
          headerShadowVisible: false,
          statusBarStyle: 'light',
          statusBarColor: THEME.colors.white,
          headerStyle: {
            backgroundColor: THEME.colors.white,
          },
          headerLeft: () => (
            <Button onPress={openScreen} p={0} style={styles.btn}>
              <MaterialIcons name="chevron-left" size={30} style={styles.backBtn}/>
            </Button>
          )
        }}
      />
      <Stack.Screen
        name='Login'
        component={Login}
      />
      <Stack.Screen
        name='Register'
        component={Register}
        options={{
          headerShown: true,
          title: "Cadastre-se",
          headerBackVisible: false,
          headerShadowVisible: false,
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: 'transparent'
  },
  backBtn: {
    color: '#1a1a1a',
    // right: 10
  },
});