import React, { useState, useEffect } from "react";
import { View, Image } from "react-native";
import { styles, imageStyle } from "./AppStyles.js";
import "react-native-url-polyfill/auto";

import HomeOptions from "./screens/HomeOptions/HomeOptions";
import GameOptions from "./screens/GameOptions/GameOptions";
import Lobby from "./screens/Lobby/Lobby";

import * as Font from "expo-font";
import Game from "./screens/Game/Game";
import PublicGames from "./screens/PublicGames/PublicGames";

import { IGame, getGamesSorted } from "./util/GameApiManager";
import { setDeviceIdentifier } from "./util/DeviceIdentifierUtil";

import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const [view, setView] = useState("HOME");
  const [gameId, setGameId] = useState("");
  const [fontLoaded, setFontsLoaded] = useState(false);
  const [games, setGames] = useState<IGame[]>([]);
  const [deviceId, setDeviceId] = useState("");

  const star = require("./assets/images/star.png");

  const loadFonts = async () => {
    await Font.loadAsync({
      PressStart2P: require("./assets/fonts/PressStart2P-Regular.ttf"),
    });

    setFontsLoaded(true);
  };

  useEffect(() => {
    loadFonts();
    setDeviceIdentifier(setDeviceId);
  }, []);

  useEffect(() => {
    fetchGames();
  }, [gameId]);

  const fetchGames = async () => {
    const fetchedGames: IGame[] | undefined = await getGamesSorted();
    if (fetchedGames) setGames(fetchedGames);
  };

  if (!fontLoaded) {
    return (
      <Image
        style={imageStyle.loadingImage}
        source={require("./assets/splash.png")}
      />
    );
  }

  if (view === "PUBLIC_GAMES") {
    return (
      <PublicGames games={games} setView={setView} setGameId={setGameId} />
    );
  }

  return (
    <>
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
                  gameId={gameId}
                  setGameId={setGameId}
                />
              ) : view === "LOBBY" || view == "HOST_LOBBY" ? (
                <Lobby
                  setGameId={setGameId}
                  view={view}
                  setView={setView}
                  gameId={gameId}
                />
              ) : view === "GAME" ? (
                <Game
                  gameId={gameId}
                  setGameId={setGameId}
                  view={view}
                  setView={setView}
                />
              ) : (
                <></>
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
      </View>
    </>
  );
}
