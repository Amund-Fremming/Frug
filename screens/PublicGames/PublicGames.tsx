import React, { Dispatch, SetStateAction, useState, useEffect } from "react";
import { View, TextInput, Image, Pressable } from "react-native";
import { styles, imageStyle } from "./PublicGamesStyles";

import BigButton from "../../components/BigButton/BigButton";
import MediumButton from "../../components/MediumButton/MediumButton";

import { Voter, voteOnGame } from "../../util/GameApiManager";

interface PremadeProps {
  setGameId: Dispatch<SetStateAction<string>>;
  setView: Dispatch<SetStateAction<string>>;
}

export default function Premade({ setGameId, setView }: PremadeProps) {
  const [deviceId, setDeviceId] = useState(0);
  const [searchString, setSearchString] = useState("");

  const searchIcon = require("../../assets/images/searchIcon.png");

  useEffect(() => {
    // Get the device id
    // set the device id
  }, []);

  const handleSetGame = (gameId: string) => {
    setGameId(gameId);
    setView("GAME");
  };

  const handleLeave = () => {
    setGameId("");
    setView("HOME");
  };

  const handleVote = async (gameId: string, vote: boolean) => {
    const voter: Voter = {
      userDeviceId: deviceId,
      gameId: gameId,
      vote: vote,
    };

    await voteOnGame(voter);
  };

  const handleSearch = () => {
    // Get searchstring
    // use Api manager to send request
    // set the games result to games state

    setSearchString("");
  };

  return (
    <>
      <View style={styles.viewContainer}>
        <View style={styles.searchBarContainer}>
          <View style={styles.searchBarWrapper}>
            <TextInput
              value={searchString}
              placeholder="Search Games"
              onChangeText={(text: string) =>
                setSearchString(text.toUpperCase())
              }
              style={styles.input}
            />
            <Pressable onPress={handleSearch}>
              <Image style={imageStyle.searchIcon} source={searchIcon} />
            </Pressable>
          </View>
        </View>
      </View>
    </>
  );
}
