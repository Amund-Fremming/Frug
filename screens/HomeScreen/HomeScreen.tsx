import { View, Text } from "react-native";

import PlanetBackground from "../../components/PlanetBackground/PlanetBackground";
import Mascot from "../../components/Mascot/Mascot";

export function HomeScreen() {
  return (
    <>
      <PlanetBackground view="HOME" />

      <View>
        <Text>HomeScreen</Text>
      </View>
    </>
  );
}
