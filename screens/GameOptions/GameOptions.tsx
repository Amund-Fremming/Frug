import React, { Dispatch, SetStateAction, useState } from "react";
import { View, Alert } from "react-native";
import { styles } from "./GameOptionsStyles";
import { validateInput } from "../../util/InputValidator";

import Mascot from "../../components/Mascot/Mascot";
import Planets from "../../components/Planets/Planets";
import BigButton from "../../components/BigButton/BigButton";
import MediumButton from "../../components/MediumButton/MediumButton";
import BigInput from "../../components/BigInput/BigInput";

import { createGame, Game } from "../../util/GameApiManager";

interface HostProps {
  setView: Dispatch<SetStateAction<string>>;
  view: string;
  gameId: string;
  setGameId: Dispatch<SetStateAction<string>>;
}

export default function GameOptions({
  view,
  setView,
  gameId,
  setGameId,
}: HostProps) {
  const [value, setValue] = useState("");

  const handleClick = async () => {
    if (!validateInput(value)) {
      Alert.alert(
        "Invalid Input",
        "Some characters are not allowed, try again"
      );
      setValue("");
      return;
    }

    if (value.length > 9) {
      Alert.alert("Invalid Input", "Game ID can is too long(9), try again");
      setValue("");
      return;
    }

    setGameId(value);

    if (view === "HOST") {
      const game: Game = {
        gameId: value,
        gameStarted: false,
        publicGame: false,
        iconImage: "none",
        numberOfQuestions: 0,
        voters: [],
      };

      await createGame(game);
    }
    setView(view === "HOST" ? "HOST_LOBBY" : "LOBBY");
  };

  return (
    <>
      <Mascot />
      <Planets />

      <View style={styles.buttonContainer}>
        <BigInput
          value={value}
          placeholder="Game ID"
          handleChange={(text) => setValue(text.toUpperCase())}
        />
        <BigButton
          text={view === "HOST" ? "Host" : "Join"}
          handlePress={handleClick}
        />
        <MediumButton text="Back" handlePress={() => setView("HOME")} />
      </View>
    </>
  );
}
