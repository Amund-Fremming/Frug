import React, { useEffect, useRef } from "react";
import { Animated, Image, View, Easing } from "react-native";
import { styles, imageStyle } from "./PlanetStyles.js";

export default function Planets() {
  const planetOneAnim = useRef(new Animated.Value(0)).current;
  const planetTwoAnim = useRef(new Animated.Value(0)).current;
  const planetThreeAnim = useRef(new Animated.Value(0)).current;

  const startAnimation = (animValue: Animated.Value) => {
    const duration = 1000 + Math.random() * 1500;

    Animated.loop(
      Animated.sequence([
        Animated.timing(animValue, {
          toValue: 20,
          duration: duration,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
        Animated.timing(animValue, {
          toValue: 0,
          duration: duration,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
      ])
    ).start();
  };

  useEffect(() => {
    startAnimation(planetOneAnim);
    startAnimation(planetTwoAnim);
    startAnimation(planetThreeAnim);
  }, []);

  const planetOne = require("../../assets/images/planets/planetOne.png");
  const planetTwo = require("../../assets/images/planets/planetTwo.png");
  const planetThree = require("../../assets/images/planets/planetThree.png");

  return (
    <View style={styles.planetContainer}>
      <Animated.View
        style={[
          styles.planetWrapperContainer,
          { transform: [{ translateY: planetOneAnim }] },
        ]}
      >
        <Image source={planetOne} style={imageStyle.planetOne} />
      </Animated.View>
      <Animated.View
        style={[
          { ...styles.planetWrapperContainer, bottom: 30 },
          { transform: [{ translateY: planetTwoAnim }] },
        ]}
      >
        <Image source={planetTwo} style={imageStyle.planetTwo} />
      </Animated.View>
      <Animated.View
        style={[
          styles.planetWrapperContainer,
          { transform: [{ translateY: planetThreeAnim }] },
        ]}
      >
        <Image source={planetThree} style={imageStyle.planetThree} />
      </Animated.View>
    </View>
  );
}
