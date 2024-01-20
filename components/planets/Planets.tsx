import { View, Image } from "react-native";
import { styles, imageStyle } from "./PlanetStyles.js";
export default function Planets() {
  const planetOne = require("../../assets/images/planets/planetOne.png");
  const planetTwo = require("../../assets/images/planets/planetTwo.png");
  const planetThree = require("../../assets/images/planets/planetThree.png");

  return (
    <View style={styles.planetContainer}>
      <View style={styles.planetWrapperContainer}>
        <Image source={planetOne} style={imageStyle.planetOne} />
      </View>
      <View style={{ ...styles.planetWrapperContainer, bottom: 30 }}>
        <Image source={planetTwo} style={imageStyle.planetTwo} />
      </View>
      <View style={styles.planetWrapperContainer}>
        <Image source={planetThree} style={imageStyle.planetThree} />
      </View>
    </View>
  );
}
