import { View, Image } from "react-native";
import { styles, imageStyle } from "./MascotStyles";

export default function Mascot() {
  const planetOne = require("../../assets/images/planets/planetOne.png");
  const planetTwo = require("../../assets/images/planets/planetTwo.png");
  const planetThree = require("../../assets/images/planets/planetThree.png");

  const mascot = require("../../assets/images/mascot.png");

  return (
    <>
      {/* Absolute Planets */}

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

      {/* Absolute Mascot*/}
      <View style={styles.mascotContainer}>
        <Image source={mascot} style={imageStyle.mascot} />
      </View>
    </>
  );
}
