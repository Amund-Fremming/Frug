import React, { useState, useEffect } from "react";
import { Text, View, Image, Pressable, StyleSheet } from "react-native";
import { styles, imageStyle } from "./HomeStyles";

export default function Home() {
  const [print, setPrint] = useState("");

  const planetOne = require("../../assets/images/planets/planetOne.png");
  const planetTwo = require("../../assets/images/planets/planetTwo.png");
  const planetThree = require("../../assets/images/planets/planetThree.png");

  const star = require("../../assets/images/star.png");

  const mascot = require("../../assets/images/mascot.png");

  const generateStars = (stars: number) => {
    let starArray = [];
    for (let i = 0; i < stars; i++) {
      const topPosition = Math.random() * 50;
      const leftPosition = Math.random() * 100;
      const width = Math.random() * 15;
      const height = (width / 15) * 10;

      starArray.push(
        <Image
          key={i}
          source={star}
          style={{
            top: `${topPosition}%`,
            left: `${leftPosition}%`,
            width: width,
            height: height,
            zIndex: 0,
          }}
        />
      );
    }
    return starArray;
  };

  return (
    <View style={styles.container}>
      <View style={styles.layerOneCircle}>
        <View style={styles.layerTwoCircle}>
          <View style={styles.layerThreeCircle}>
            <View style={styles.buttonContainer}>
              <View style={styles.textShadow}>
                <Pressable
                  onPress={() => setPrint("Hosting ...")}
                  style={buttonStyles.hostButton}
                >
                  <Text style={styles.text}>Host</Text>
                </Pressable>
              </View>
              <View style={styles.textShadow}>
                <Pressable
                  onPress={() => setPrint("Joining ...")}
                  style={buttonStyles.joinButton}
                >
                  <Text style={styles.text}>Join</Text>
                </Pressable>
              </View>
              <Text>{print}</Text>
            </View>
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

      {/* Absolute stars */}
      <View style={styles.stars}>
        {generateStars(30)}

        <Image source={star} style={imageStyle.starOne} />
        <Image source={star} style={imageStyle.starTwo} />
        <Image source={star} style={imageStyle.starThree} />

        <Image source={star} style={imageStyle.starFour} />
        <Image source={star} style={imageStyle.starFive} />
        <Image source={star} style={imageStyle.starSix} />
      </View>
    </View>
  );
}

const buttonStyles = StyleSheet.create({
  hostButton: {
    width: "100%",
    height: "92%",
    backgroundColor: "#181818",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    borderRadius: 10,
  },

  joinButton: {
    width: "100%",
    height: "92%",
    backgroundColor: "#181818",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    borderRadius: 10,
  },
});
