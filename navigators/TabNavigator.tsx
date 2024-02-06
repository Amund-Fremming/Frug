import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import GamePlay from "../screens/GamePlay/GamePlay";
import PublicGames from "../screens/PublicGames/PublicGames";
import { HomeScreen } from "../screens/HomeScreen/HomeScreen";

import { RootStackParamList } from "./NavigationTypes";

const Tab = createBottomTabNavigator<RootStackParamList>();

export function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            height: 70,
            backgroundColor: "transparent",
            position: "absolute",
            borderTopWidth: 0,
          },
        }}
      >
        <Tab.Screen
          options={{ headerShown: false }}
          name="Game"
          component={GamePlay}
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
