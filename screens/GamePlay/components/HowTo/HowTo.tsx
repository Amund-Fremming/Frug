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
      <View style={styles.wrapper}>
        <View style={styles.headerView}>
          <Text style={styles.header}>How to play</Text>
        </View>
        <View style={styles.indentedWrapper}>
          <Text style={styles.text}>1. Create a Game</Text>
          <Text style={styles.subText}>- Select Host game</Text>
          <Text style={styles.subText}>- Choose a Name for your game</Text>
          <Text style={styles.text}>2. Invite Friends</Text>
          <Text style={styles.subText}>- Share your Game Name</Text>
          <Text style={styles.subText}>
            - Your friends click join, then insert your Game Name
          </Text>
          <Text style={styles.text}>3. Add Questions</Text>
          <Text style={styles.subText}>- Add questions about anything</Text>
          <Text style={styles.subText}>
            - All questions will be added to the game
          </Text>
          <Text style={styles.text}>4. Play the Game</Text>
          <Text style={styles.subText}>
            - When the host is ready, press start
          </Text>
          <Text style={styles.subText}>- Click start game</Text>
        </View>
        <MediumButton text="Back" handlePress={() => setView("HOME")} />
      </View>
    </View>
  );
}
