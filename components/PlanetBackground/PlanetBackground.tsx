import { View, Image } from "react-native";
import { styles, imageStyle } from "./PlanetBackgroundStyles";
import Planets from "../Planets/Planets";

interface Props {
  view: string;
}

export default function PlanetBackground({ view }: Props) {
  const star = require("../../assets/images/star.png");

  return (
    <>
      {/* Absolute Planet Background */}
      <View style={styles.container}>
        <View style={styles.layerOneCircle}>
          <View style={styles.layerTwoCircle}>
            <View style={styles.layerThreeCircle}></View>
          </View>
        </View>

        {/* Absolute Stars */}
        <Image source={star} style={imageStyle.starOne} />
        <Image source={star} style={imageStyle.starTwo} />
        <Image source={star} style={imageStyle.starThree} />

        <Image source={star} style={imageStyle.starFour} />
        <Image source={star} style={imageStyle.starFive} />
        <Image source={star} style={imageStyle.starSix} />

        <Image source={star} style={imageStyle.starSeven} />
        <Image source={star} style={imageStyle.starEight} />
        <Image source={star} style={imageStyle.starNine} />

        <Image source={star} style={imageStyle.starTen} />
        <Image source={star} style={imageStyle.starEleven} />
        <Image source={star} style={imageStyle.starTwelve} />

        <Image source={star} style={imageStyle.starThirteen} />
        <Image source={star} style={imageStyle.starFourteen} />
        <Image source={star} style={imageStyle.starFifteen} />

        <Image source={star} style={imageStyle.starSixteen} />
        <Image source={star} style={imageStyle.starSeventeen} />
        <Image source={star} style={imageStyle.starEighteen} />
      </View>

      {["HOME", "HOST", "JOIN"].includes(view) && <Planets />}
    </>
  );
}
