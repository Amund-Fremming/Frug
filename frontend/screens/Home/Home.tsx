import { Text, View, Image } from "react-native";
import { styles, imageStyle } from "./HomeStyles";

export default function Home() {
  const planetOne = require("../../assets/images/planets/planetOne.png");
  const planetTwo = require("../../assets/images/planets/planetTwo.png");
  const planetThree = require("../../assets/images/planets/planetThree.png");

  const mascot = require("../../assets/images/mascot.png");

  return (
    <View style={styles.container}>
      <View style={styles.layerOneCircle}>
        <View style={styles.layerTwoCircle}>
          <View style={styles.layerThreeCircle}>
            <Text>Hey</Text>
          </View>
        </View>
      </View>

      {/* Absolute pos planets */}
      <View style={styles.imageContainer}>
        <View style={styles.planetOne}>
          <Image source={planetOne} style={imageStyle.planetOne} />
        </View>
        <View style={styles.planetTwo}>
          <Image source={planetTwo} style={imageStyle.planetTwo} />
        </View>
        <View style={styles.planetThree}>
          <Image source={planetThree} style={imageStyle.planetThree} />
        </View>
      </View>

      {/* Absolute pos mascot */}
      <View style={styles.mascotContainer}>
        <Image source={mascot} style={imageStyle.mascot} />
      </View>
    </View>
  );
}
