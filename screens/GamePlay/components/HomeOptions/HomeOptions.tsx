import React, { Dispatch, SetStateAction } from "react";
import { View } from "react-native";
import { styles } from "./HomeOptionsStyles";

import BigButton from "../../../../components/BigButton/BigButton";
import MediumButton from "../../../../components/MediumButton/MediumButton";
import SmallButton from "../../../../components/SmallButton/SmallButton";
import Mascot from "../../../../components/Mascot/Mascot";

interface HomeProps {
  setView: Dispatch<SetStateAction<string>>;
}

export default function HomeOptions({ setView }: HomeProps) {
  return (
    <View style={styles.buttonContainer}>
      <Mascot />
      <View style={styles.buttonWrapper}>
        <BigButton text="Host" handlePress={() => setView("HOST")} />
        <BigButton text="Join" handlePress={() => setView("JOIN")} />
        <MediumButton text="How to" handlePress={() => setView("HOW_TO")} />
      </View>
    </View>
  );
}
