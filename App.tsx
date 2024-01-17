import React, { useState, useEffect } from "react";
import { View, Image, Text } from "react-native";
import { styles, imageStyle } from "./AppStyles.js";

import HomeOptions from "./components/HomeOptions/HomeOptions";
import GameOptions from "./components/GameOptions/GameOptions";
import Lobby from "./components/Lobby/Lobby";
import Mascot from "./components/Mascot/Mascot";

import * as Font from "expo-font";

export default function App() {
  const [view, setView] = useState("HOME");
  const [gameId, setGameId] = useState("");
  const [fontLoaded, setFontsLoaded] = useState(false);

  const star = require("./assets/images/star.png");

  const loadFonts = async () => {
    await Font.loadAsync({
      PressStart2P: require("./assets/fonts/PressStart2P-Regular.ttf"),
    });

    setFontsLoaded(true);
  };

  useEffect(() => {
    loadFonts();
  }, []);

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
            ) : view === "LOBBY" ? (
              <Lobby
                setGameId={setGameId}
                view={view}
                setView={setView}
                gameId={gameId}
              />
            ) : (
              <></>
            )}
          </View>
        </View>
      </View>

      {/* Loads Mascot and planets for every view, but not lobby */}
      {["HOME", "JOIN", "HOST"].includes(view) && <Mascot />}
      {["LOBBY", "GAME_LOBBY"].includes(view) && (
        <Text style={styles.numQuestions}>32</Text>
      )}

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
