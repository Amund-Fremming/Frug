import React, { Dispatch, SetStateAction } from "react";
import { View } from "react-native";
import { styles } from "./SpinHomeOptionsStyles";

import BigButton from "../../../../components/BigButton/BigButton";
import MediumButton from "../../../../components/MediumButton/MediumButton";
import Mascot from "../../../../components/Mascot/Mascot";

interface HomeProps {
  setView: Dispatch<SetStateAction<string>>;
}

export default function SpinHomeOptions({ setView }: HomeProps) {
  return (
    <View style={styles.buttonContainer}>
      <Mascot />
      <View style={styles.buttonWrapper}>
        <BigButton text="Host" handlePress={() => setView("SPIN_HOST")} />
        <BigButton text="Join" handlePress={() => setView("SPIN_JOIN")} />
        <MediumButton
          text="How to"
          handlePress={() => setView("SPIN_HOW_TO")}
        />
      </View>
    </View>
  );
}
