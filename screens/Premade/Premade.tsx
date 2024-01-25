import React, { Dispatch, SetStateAction } from "react";
import { View, Image } from "react-native";
import { styles, imageStyle } from "./PremadeStyles";

import BigButton from "../../components/BigButton/BigButton";
import MediumButton from "../../components/MediumButton/MediumButton";

interface PremadeProps {
  setGameId: Dispatch<SetStateAction<string>>;
  setView: Dispatch<SetStateAction<string>>;
}

export default function Premade({ setGameId, setView }: PremadeProps) {
  const mascot = require("../../assets/images/raptorrune.png");

  const handleSetQuestionSet = (gameId: string) => {
    setGameId(gameId);
    setView("GAME");
  };

  const handleLeave = () => {
    setGameId("");
    setView("HOME");
  };

  return (
    <>
      <View style={styles.buttonContainer}>
        <BigButton
          text="Mix"
          handlePress={() => handleSetQuestionSet("_pmd_001")}
        />
        <BigButton
          text="WildCard"
          handlePress={() => handleSetQuestionSet("_pmd_003")}
        />
        <BigButton
          text="DareDevil"
          handlePress={() => handleSetQuestionSet("_pmd_002")}
        />
        <MediumButton text="Home" handlePress={handleLeave} />
      </View>

      {/* Absolute Mascot*/}
      <View style={styles.mascotContainer}>
        <Image source={mascot} style={imageStyle.mascot} />
      </View>
    </>
  );
}
