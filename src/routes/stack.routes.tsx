import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProfileNew from '../screens/Profile';
import Login from '../pages/Login';

const Stack = createNativeStackNavigator()

export default function StackRoutes() {
  return(
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name='login'
        component={Login}
      />
    </Stack.Navigator>
  );
}