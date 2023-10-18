import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialIcons } from 'react-native-vector-icons';
import { StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Button } from 'native-base';

import Login from '../screens/Login';
import Profile from '../screens/Profile';
import Register from '../screens/Register';
import Leadership from '../screens/Leadership';
import About from '../screens/About';

const Stack = createNativeStackNavigator()

export default function StackRoutes() {
  const navigation: any = useNavigation()

  function goBack() {
    navigation.goBack()
  }

  return(
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name='Root'
        component={Profile}
        options={{
          headerShown: true,
          title: "Meu perfil",
          headerShadowVisible: false,
          statusBarStyle: 'light',
          headerLeft: () => (
            <Button onPress={goBack} p={0} style={styles.btn}>
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

      <Stack.Screen
        name='Leadership'
        component={Leadership}
        options={{
          headerShown: true,
          title: "Liderança",
          headerBackVisible: false,
          headerShadowVisible: false,
          headerLeft: () => (
            <Button onPress={goBack} p={0} style={styles.btn}>
              <MaterialIcons name="chevron-left" size={30} style={styles.backBtn}/>
            </Button>
          )
        }}
      />

      <Stack.Screen
        name='About'
        component={About}
        options={{
          headerShown: true,
          title: "A Renascer",
          headerBackVisible: false,
          headerShadowVisible: false,
          headerLeft: () => (
            <Button onPress={goBack} p={0} style={styles.btn}>
              <MaterialIcons name="chevron-left" size={30} style={styles.backBtn}/>
            </Button>
          )
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