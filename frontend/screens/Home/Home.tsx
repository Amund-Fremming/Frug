import { Text, View } from "react-native";
import { styles } from "./HomeStyles";

export default function Home() {
  const planetOne = require("../../assets/images/planets/planetOne.png");
  const planetTwo = require("../../assets/images/planets/planetTwo.png");
  const planetThree = require("../../assets/images/planets/planetThree.png");

  return (
    <View style={styles.container}>
      <View style={styles.layerOneCircle}>
        <View style={styles.layerTwoCircle}>
          <View style={styles.layerThreeCircle}>
            <Text>X</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
