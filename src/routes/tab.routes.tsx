import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

import Events from "../pages/tabs/Events";
import Contribute from "../pages/tabs/Contribute";
import More from "../pages/tabs/More";
import { THEME } from "../styles/theme";
import Dashboard from "../pages/tabs/Dashboard";
import Videos from "../pages/tabs/Videos";
import { Box, Button, Icon, IconButton, Image, Text, View } from "native-base";
import StackRoutes from "./stack.routes";
import EventsRoutes from "./teste.routes";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../contexts/auth";
import Profile from "../pages/Profile";

const Tab = createBottomTabNavigator();
const imageLogo = './../assets/images/logo.png';

export default function TabRoutes() {
  const navigation: any = useNavigation()
  const {signed, signIn} = useAuth()

  console.log("signed TAB", signed);
  

  async function goSignIn(): Promise<void> {
    navigation.navigate('SignIn');
  }

  async function goProfile(): Promise<void> {
    navigation.navigate('Profile');
  }

  return (
    <Tab.Navigator screenOptions={{
      headerShown: true,
      headerShadowVisible: false,
      headerStyle: {
        backgroundColor: THEME.colors.header,
      },
      tabBarStyle: {backgroundColor: THEME.colors.tabBar, borderTopWidth: 0},
      tabBarActiveTintColor: '#FFF',
      tabBarLabelStyle: {
        marginTop: -5,
        marginBottom: 5,
      },
      headerTitleStyle: {
        color: 'white'
      }
    }}>
      <Tab.Screen
        name="Dashboard" 
        component={Dashboard}
        options={{
          tabBarIcon: ({ color, size }) => <MaterialIcons name="home" color={color} size={size} />,
          tabBarLabel: "Início",
          headerTitle: (() =>
            <View
              alignItems={'center'}
              flex={1} display={'flex'} flexDirection={'row'} justifyContent={'center'}
            >
              <Image
                source={require("./../assets/images/logo.png")}
                alt="logo"
                style={{ width: 27, height: 27, marginRight: 5 }}
              />
              <Text
                color={'#FFF'}
                textTransform={'uppercase'}
                fontSize={12}
              >
                Igreja Renascer
              </Text>
            </View>
          ),
          headerRight: (() =>
            (!signed ?
              <Button
                onPress={goSignIn}
                borderRadius={50}
                height={8}
                marginRight={5}
                backgroundColor={'transparent'}
                borderColor={'yellow.400'}
                borderWidth={1}
                _pressed={{
                  backgroundColor: 'yellow.400',
                  _text: {
                    color: 'backgroud',
                    fontWeight: 'bold'
                  }
                }}
                _text={{
                  color: 'yellow.400',
                  textTransform: 'uppercase',
                  fontSize: 12,
                  lineHeight: 12,
                }}
              >
                Login
              </Button>
            :
              <Box alignItems="center">
                <IconButton
                  onPress={goProfile}
                  icon={<Icon as={Ionicons} name="person-circle"/>}
                  borderRadius={'full'}
                  _icon={{
                    color: '#FFF',
                    size: 8
                  }}
                  _pressed={{
                    bg: 'yellow.400:alpha.20'
                  }}
                />
              </Box>
            )
          )
        }}
      />

      <Tab.Screen
        name="Videos" 
        component={Videos}
        options={{
          tabBarIcon: ({ color, size }) => <MaterialIcons name="video-library" color={color} size={size} />,
          tabBarLabel: "Palavras",
        }}
      />

      <Tab.Screen
        name="Eventos"
        component={EventsRoutes}
        options={{
          tabBarIcon: ({ color, size }) => <MaterialIcons name="event" color={color} size={size} />,
          tabBarLabel: "Eventos",
        }}
      />

      <Tab.Screen
        name="Contribute" 
        component={Contribute}
        options={{
          tabBarIcon: ({ color, size }) => <MaterialIcons name="volunteer-activism" color={color} size={size} />,
          tabBarLabel: "Contribua",
        }}
      />

      <Tab.Screen
        name="More" 
        component={More}
        options={{
          tabBarIcon: ({ color, size }) => <MaterialIcons name="more-horiz" color={color} size={size} />,
          tabBarLabel: "Mais",
        }}
      />
    </Tab.Navigator>
  );
}