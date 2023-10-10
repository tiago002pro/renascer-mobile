import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProfileNew from '../screens/Profile';

const Stack = createNativeStackNavigator()

export default function StackRoutes() {
  return(
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name='home'
        component={ProfileNew}
      />
    </Stack.Navigator>
  );
}