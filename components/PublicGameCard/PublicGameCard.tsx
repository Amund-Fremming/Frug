import React, { Dispatch, SetStateAction, useState } from "react";
import { View, Text, Image, Pressable } from "react-native";

import { styles, imageStyle } from "./PublicGameCarsStyles";
import { Game } from "../../util/GameApiManager";

import { Voter, voteOnGame } from "../../util/GameApiManager";

interface PublicGameCardProps {
  game: Game;
  setGameId: Dispatch<SetStateAction<string>>;
  setView: Dispatch<SetStateAction<string>>;
}

export function PublicGameCard({
  game,
  setGameId,
  setView,
}: PublicGameCardProps) {
  const [deviceId, setDeviceId] = useState(0);

  const icon =
    game.iconImage === "DIRTY"
      ? require("../../assets/images/icons/goodIcon.png")
      : game.iconImage === "EDGY"
        ? require("../../assets/images/icons/goodIcon.png")
        : require("../../assets/images/icons/goodIcon.png");

  const handleClick = () => {
    setGameId(game.gameId);
    setView("GAME");
  };

  const handleVote = async (gameId: string, vote: boolean) => {
    const voter: Voter = {
      userDeviceId: deviceId,
      gameId: gameId,
      vote: vote,
    };

    await voteOnGame(voter);
  };

  return (
    <Pressable onPress={handleClick}>
      <View style={styles.cardContainer}>
        <View style={styles.textSplit}>
          <Text style={styles.headerText}>{game.gameId}</Text>
          <Text style={styles.subHeaderText}>
            Questions: {game.numberOfQuestions}
          </Text>
        </View>
        <View style={styles.iconSplit}>
          <Image style={imageStyle.niceIcon} source={icon} />
        </View>
      </View>
    </Pressable>
  );
}
