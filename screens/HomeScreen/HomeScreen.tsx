import { View, Text } from "react-native";
import { styles } from "./HomeScreenStyles";
import PlanetBackground from "../../components/PlanetBackground/PlanetBackground";

export function HomeScreen() {
  return (
    <>
      <PlanetBackground />

      <View style={styles.container}>
        <Text>HomeScreen</Text>
      </View>
    </>
  );
}
