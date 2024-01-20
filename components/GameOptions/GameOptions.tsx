import React, { Dispatch, SetStateAction, useState } from "react";
import { View, TextInput, Alert } from "react-native";
import { styles } from "./GameOptionsStyles";
import { validateInput } from "../../util/InputValidator";

import Mascot from "../Mascot/Mascot";
import Planets from "../planets/Planets";
import BigButton from "../BigButton/BigButton";
import MediumButton from "../MediumButton/MediumButton";

interface HostProps {
  setView: Dispatch<SetStateAction<string>>;
  view: string;
  setGameId: Dispatch<SetStateAction<string>>;
}

export default function GameOptions({ view, setView, setGameId }: HostProps) {
  const [value, setValue] = useState("");

  const handleClick = () => {
    if (!validateInput(value)) {
      Alert.alert(
        "Invalid Input",
        "Some characters are not allowed, try again"
      );
      setValue("");
      return;
    }

    if (value.length > 10) {
      Alert.alert("Invalid Input", "Game ID can is too long, try again");
      setValue("");
      return;
    }

    setGameId(value);
    setView(view === "HOST" ? "HOST_LOBBY" : "LOBBY");
  };

  return (
    <>
      <Mascot />
      <Planets />

      <View style={styles.buttonContainer}>
        <TextInput
          placeholder="Game id"
          style={styles.input}
          value={value}
          onChangeText={(text) => setValue(text.toUpperCase())}
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
