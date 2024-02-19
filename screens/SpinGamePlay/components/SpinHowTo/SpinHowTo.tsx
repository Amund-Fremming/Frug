import { View, Text } from "react-native";
import { styles } from "./SpinHowToStyles";
import { Dispatch, SetStateAction } from "react";
import MediumButton from "../../../../components/MediumButton/MediumButton";

interface HowToProps {
  setView: Dispatch<SetStateAction<string>>;
}

export default function SpinHowTo({ setView }: HowToProps) {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.headerView}>
          <Text style={styles.header}>How to play</Text>
        </View>
        <View style={styles.indentedWrapper}>
          <Text style={styles.text}>1.</Text>
          <Text style={styles.subText}>- </Text>
          <Text style={styles.subText}>- </Text>
          <Text style={styles.text}>2. </Text>
          <Text style={styles.subText}>- </Text>
          <Text style={styles.subText}>- </Text>
          <Text style={styles.text}>3. </Text>
          <Text style={styles.subText}>-</Text>
          <Text style={styles.subText}>- </Text>
          <Text style={styles.text}>4.</Text>
          <Text style={styles.subText}>- </Text>
          <Text style={styles.subText}>- </Text>
        </View>
        <MediumButton text="Back" handlePress={() => setView("SPIN_HOME")} />
      </View>
    </View>
  );
}
