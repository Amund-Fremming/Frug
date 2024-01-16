import React, { useState } from "react";
import { View, Image } from "react-native";
import { styles, imageStyle } from "./AppStyles.js";
import HomeOptions from "./components/HomeOptions/HomeOptions";
import GameOptions from "./components/GameOptions.jsx/GameOptions";
import Lobby from "./components/Lobby/Lobby";
import Mascot from "./components/Mascot/Mascot";

export default function App() {
  const [view, setView] = useState("HOME");
  const [gameId, setGameId] = useState("");

  const star = require("./assets/images/star.png");

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

      {["HOME", "JOIN", "HOST"].includes(view) && <Mascot />}

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
