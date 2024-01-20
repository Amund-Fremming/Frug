import React, { useState, useEffect } from "react";
import { View, Image, Text } from "react-native";
import { styles, imageStyle } from "./AppStyles.js";

import HomeOptions from "./components/HomeOptions/HomeOptions";
import GameOptions from "./components/GameOptions/GameOptions";
import Lobby from "./components/Lobby/Lobby";
import Mascot from "./components/Mascot/Mascot";

import * as Font from "expo-font";
import Game from "./components/Game/Game";

export default function App() {
  const [view, setView] = useState("HOME");
  const [gameId, setGameId] = useState("");
  const [fontLoaded, setFontsLoaded] = useState(false);

  const star = require("./assets/images/star.png");
  const blobOne = require("./assets/images/blobs/blob1.png");
  const blobTwo = require("./assets/images/blobs/blob2.png");
  const blobThree = require("./assets/images/blobs/blob3.png");

  const loadFonts = async () => {
    await Font.loadAsync({
      PressStart2P: require("./assets/fonts/PressStart2P-Regular.ttf"),
    });

    setFontsLoaded(true);
  };

  useEffect(() => {
    loadFonts();
  }, []);

  if (!fontLoaded) {
    return (
      <Image
        style={imageStyle.loadingImage}
        source={require("./assets/splash.png")}
      />
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.layerOneCircle}>
        <View style={styles.layerTwoCircle}>
          <View style={styles.layerThreeCircle}>
            {view === "HOME" ? (
              <HomeOptions setView={setView} />
            ) : view === "HOST" || view === "JOIN" ? (
              <GameOptions
                view={view}
                setView={setView}
                setGameId={setGameId}
              />
            ) : view === "LOBBY" || view == "HOST_LOBBY" ? (
              <Lobby
                setGameId={setGameId}
                view={view}
                setView={setView}
                gameId={gameId}
              />
            ) : (
              <Game setGameId={setGameId} setView={setView} />
            )}
          </View>
        </View>
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

      {/* Absolute dots */}
      <View style={imageStyle.dotOne} />
      <View style={imageStyle.dotTwo} />
      <View style={imageStyle.dotThree} />

      {/* Asolute shape */}
      <Image source={blobOne} style={imageStyle.blobOne} />
      <Image source={blobTwo} style={imageStyle.blobTwo} />
      <Image source={blobThree} style={imageStyle.blobThree} />
    </View>
  );
}
