import React, { Dispatch, SetStateAction } from "react";
import { View } from "react-native";
import { styles } from "./HomeOptionsStyles";

import BigButton from "../../../../components/BigButton/BigButton";

interface HomeProps {
  setView: Dispatch<SetStateAction<string>>;
}

export default function HomeOptions({ setView }: HomeProps) {
  return (
    <>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonWrapper}>
          <BigButton text="Host" handlePress={() => setView("HOST")} />
          <BigButton text="Join" handlePress={() => setView("JOIN")} />
        </View>
      </View>
    </>
  );
}
