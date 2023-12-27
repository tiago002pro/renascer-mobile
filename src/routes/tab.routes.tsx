import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

import Contribute from "../screens/Contribute";
import { THEME } from "../styles/theme";
import { Box, Button, Icon, IconButton, Image, Text, View } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../contexts/auth";
import ScheduleRoutes from "../screens/Schedule/routes/schedule.routes";
import DashboardRoutes from "../screens/Dashboard/routes/dashboard.routes";
import VideosRoutes from "../screens/Videos/routes/videos.routes";
import MoreRoutes from "../screens/More/routes/more.routes";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  const navigation: any = useNavigation()
  const {signed, signIn} = useAuth()

  console.log("signed TAB", signed);
  

  async function goSignIn(): Promise<void> {
    // navigation.navigate('SignIn');
    navigation.navigate('DashboardRoutes', {screen:'SignIn'});
  }

  async function goProfile(): Promise<void> {
    // navigation.navigate('Profile');
    navigation.navigate('DashboardRoutes', {screen:'Profile'});
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
        name="DashboardRoutes" 
        component={DashboardRoutes}
        options={{
          tabBarIcon: ({ color, size }) => <MaterialIcons name="home" color={color} size={size} />,
          tabBarLabel: "Início",
          headerTitle: (() =>
            <View
              alignItems={'center'}
              display={'flex'}
              flexDirection={'row'}
              justifyContent={'center'}
            >
              <Image
                source={require("./../assets/images/logo.png")}
                alt="logo"
                style={{ width: 25, height: 25, padding: 2, marginRight: 7 }}
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
        name="Palavras" 
        component={VideosRoutes}
        options={{
          tabBarIcon: ({ color, size }) => <MaterialIcons name="video-library" color={color} size={size} />,
          tabBarLabel: "Palavras",
        }}
      />

      <Tab.Screen
        name="Eventos"
        component={ScheduleRoutes}
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
        name="MoreRoutes" 
        component={MoreRoutes}
        options={{
          tabBarIcon: ({ color, size }) => <MaterialIcons name="more-horiz" color={color} size={size} />,
          tabBarLabel: "Mais",
        }}
      />
    </Tab.Navigator>
  );
}