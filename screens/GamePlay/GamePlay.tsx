import React, { useState, useEffect } from "react";
import { View, Image, Alert } from "react-native";
import { styles, imageStyle } from "./GamePlayStyles.js";
import "react-native-url-polyfill/auto";

import NetInfo from "@react-native-community/netinfo";

import HomeOptions from "./components/HomeOptions/HomeOptions";
import GameOptions from "./components/GameOptions/GameOptions";
import Lobby from "./components/Lobby/Lobby";

import * as Font from "expo-font";
import Game from "./components/Game/Game";

import { setDeviceIdentifier } from "../../util/DeviceIdentifierUtil";
import { useGamePlayProvider } from "../../providers/GamePlayProvider";
import PlanetBackground from "../../components/PlanetBackground/PlanetBackground";

export default function GamePlay() {
  const { view, setView, gameId, setGameId, deviceId, setDeviceId } =
    useGamePlayProvider();

  const [fontLoaded, setFontsLoaded] = useState(false);

  const star = require("../../assets/images/star.png");

  const loadFonts = async () => {
    await Font.loadAsync({
      PressStart2P: require("../../assets/fonts/PressStart2P-Regular.ttf"),
    });

    setFontsLoaded(true);
  };

  useEffect(() => {
    loadFonts();
    setDeviceIdentifier(setDeviceId);

    const unsubscribe = NetInfo.addEventListener((state) => {
      if (state.type !== "wifi") {
        Alert.alert(
          "No WiFi Connection",
          "You are not connected to WiFi. Some features may not work as expected."
        );
      }
    });

    return () => unsubscribe();
  }, []);

  // If the font is not loaded
  if (!fontLoaded) {
    return (
      <Image
        style={imageStyle.loadingImage}
        source={require("../../assets/splash.png")}
      />
    );
  }

  // Router for different game states
  return (
    <>
      <PlanetBackground />
      {view === "HOME" && <HomeOptions setView={setView} />}

      {["HOST", "JOIN"].includes(view) && (
        <GameOptions
          view={view}
          setView={setView}
          gameId={gameId}
          setGameId={setGameId}
        />
      )}

      {["LOBBY", "HOST_LOBBY"].includes(view) && (
        <Lobby
          setGameId={setGameId}
          view={view}
          setView={setView}
          gameId={gameId}
        />
      )}

      {view === "GAME" && (
        <Game gameId={gameId} setGameId={setGameId} setView={setView} />
      )}
    </>
  );
}
