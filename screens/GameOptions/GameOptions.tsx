import React, { Dispatch, SetStateAction, useState } from "react";
import { View, Alert } from "react-native";
import { styles } from "./GameOptionsStyles";
import { validateInput } from "../../util/InputValidator";

import Mascot from "../../components/Mascot/Mascot";
import Planets from "../../components/Planets/Planets";
import BigButton from "../../components/BigButton/BigButton";
import MediumButton from "../../components/MediumButton/MediumButton";
import BigInput from "../../components/BigInput/BigInput";

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

    if (value.length > 9) {
      Alert.alert("Invalid Input", "Game ID can is too long(9), try again");
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
