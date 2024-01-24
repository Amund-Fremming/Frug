import React, { Dispatch, SetStateAction } from "react";
import { View } from "react-native";
import { styles } from "./HomeOptionsStyles";

import Mascot from "../../components/Mascot/Mascot";
import Planets from "../../components/Planets/Planets";
import BigButton from "../../components/BigButton/BigButton";
import MediumButton from "../../components/MediumButton/MediumButton";

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
        <MediumButton text="100 spm" handlePress={() => setView("PREMADE")} />
      </View>
    </>
  );
}
