import React, { useState } from "react";
import { View, Image } from "react-native";
import { styles, imageStyle } from "./HomeStyles";
import HomeOptions from "./components/HomeOptions/HomeOptions";
import GameOptions from "./components/HostOptions.jsx/GameOptions";
import Lobby from "../Lobby/Lobby";
import Error404 from "../Error/Error404";

export default function Home() {
  const [view, setView] = useState("HOME");

  const planetOne = require("../../assets/images/planets/planetOne.png");
  const planetTwo = require("../../assets/images/planets/planetTwo.png");
  const planetThree = require("../../assets/images/planets/planetThree.png");

  const star = require("../../assets/images/star.png");

  const mascot = require("../../assets/images/mascot.png");

  return (
    <View style={styles.container}>
      <View style={styles.layerOneCircle}>
        <View style={styles.layerTwoCircle}>
          <View style={styles.layerThreeCircle}>
            {view === "HOME" ? (
              <HomeOptions setView={setView} />
            ) : view === "HOST" ? (
              <GameOptions view={view} setView={setView} />
            ) : view === "JOIN" ? (
              <GameOptions view={view} setView={setView} />
            ) : view === "LOBBY" ? (
              <Lobby />
            ) : (
              <Error404 />
            )}
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
    </View>
  );
}
