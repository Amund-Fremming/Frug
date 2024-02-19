import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import GamePlay from "../screens/GamePlay/GamePlay";
import { SpinGamePlay } from "../screens/SpinGamePlay/SpinGamePlay";
import PublicGames from "../screens/PublicGames/PublicGames";
import { HomeScreen } from "../screens/HomeScreen/HomeScreen";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { moderateScale } from "../styles/Dimensions";
import { RootStackParamList } from "./NavigationTypes";

const Tab = createBottomTabNavigator<RootStackParamList>();

export function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarHideOnKeyboard: true,
          tabBarStyle: {
            height: 80,
            backgroundColor: "transparent",
            position: "absolute",
            borderTopWidth: 0,
            paddingBottom: 10,
          },
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color }) => {
            let iconName;

            if (route.name === "Game" || route.name === "Spin") {
              iconName = focused
                ? "gamepad-variant"
                : "gamepad-variant-outline";
            } else if (route.name === "Public") {
              iconName = focused ? "account-group" : "account-group-outline";
            } else if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            }

            return (
              <MaterialCommunityIcons
                name={iconName || "default-icon-name"}
                size={moderateScale(45)}
                color={color}
              />
            );
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen
          options={{ headerShown: false }}
          name="Game"
          component={GamePlay}
        />
        <Tab.Screen
          options={{ headerShown: false }}
          name="Spin"
          component={SpinGamePlay}
        />
        <Tab.Screen
          options={{ headerShown: false }}
          name="Public"
          component={PublicGames}
        />
        <Tab.Screen
          options={{ headerShown: false }}
          name="Home"
          component={HomeScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
