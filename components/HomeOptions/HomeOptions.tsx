import React, { Dispatch, SetStateAction, useState } from "react";
import { View } from "react-native";
import { styles } from "./HomeOptionsStyles";

import Mascot from "../Mascot/Mascot";
import Planets from "../planets/Planets";
import BigButton from "../BigButton/BigButton";

interface HomeProps {
  setView: Dispatch<SetStateAction<string>>;
}

export default function HomeOptions({ setView }: HomeProps) {
  return (
    <>
      <Planets />
      <Mascot />

      <View style={styles.buttonContainer}>
        <BigButton text="Host" handlePress={() => setView("HOST")} />
        <BigButton text="Join" handlePress={() => setView("JOIN")} />
      </View>
    </>
  );
}
