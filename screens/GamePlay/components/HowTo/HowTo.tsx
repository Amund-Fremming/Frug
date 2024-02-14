import { View, Text } from "react-native";
import { styles } from "./HowToStyles";
import { Dispatch, SetStateAction } from "react";
import MediumButton from "../../../../components/MediumButton/MediumButton";

interface HowToProps {
  setView: Dispatch<SetStateAction<string>>;
}

export function HowTo({ setView }: HowToProps) {
  return (
    <View style={styles.container}>
      <Text>How to!</Text>
      <MediumButton text="Back" handlePress={() => setView("HOME")} />
    </View>
  );
}
