import React, { Dispatch, SetStateAction, useState } from "react";
import { View, Text, Image, Pressable } from "react-native";

import { styles, imageStyle } from "./PublicGameCarsStyles";
import { IGame } from "../../util/GameApiManager";
import { Voter, voteOnGame } from "../../util/GameApiManager";

import Feather from "react-native-vector-icons/Feather";

interface PublicGameCardProps {
  setGameId: Dispatch<SetStateAction<string>>;
  setView: Dispatch<SetStateAction<string>>;
  game: IGame;
  deviceId: string;
}

export function PublicGameCard({
  setGameId,
  setView,
  game,
  deviceId,
}: PublicGameCardProps) {
  const [upvoteColor, setUpvoteColor] = useState("gray");
  const [downvoteColor, setDownvoteColor] = useState("gray");
  const [gameRating, setGameRating] = useState(86);

  const icon =
    game.iconImage === "DIRTY"
      ? require("../../assets/images/icons/dirtyIcon.webp")
      : game.iconImage === "EDGY"
        ? require("../../assets/images/icons/edgyIcon.webp")
        : require("../../assets/images/icons/niceIcon.webp");

  const handleClick = () => {
    setGameId(game.gameId);
    setView("GAME");
  };

  const handleVote = async (vote: boolean) => {
    if (vote) {
      setDownvoteColor("gray");
      setUpvoteColor("green");
    }

    if (!vote) {
      setDownvoteColor("red");
      setUpvoteColor("gray");
    }

    const voter: Voter = {
      userDeviceId: deviceId,
      gameId: game.gameId,
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
          <View style={styles.voteContainer}>
            <Pressable onPress={() => handleVote(true)}>
              <Feather name="thumbs-up" size={26} color={upvoteColor} />
            </Pressable>
            <Pressable onPress={() => handleVote(false)}>
              <Feather name="thumbs-down" size={26} color={downvoteColor} />
            </Pressable>
            <Text style={styles.procentileText}>{gameRating}%</Text>
          </View>
        </View>
        <View style={styles.iconSplit}>
          <Image style={imageStyle.niceIcon} source={icon} />
        </View>
      </View>
    </Pressable>
  );
}
