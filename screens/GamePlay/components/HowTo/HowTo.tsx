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
        <Text style={styles.header}>How to play</Text>
        <View style={styles.indentedWrapper}>
          <Text style={styles.text}>1. Create a Game</Text>
          <Text style={styles.subText}>- Select the option to Host</Text>
          <Text style={styles.subText}>
            - Choose a unique ID for you game, and store it for later
          </Text>
          <Text style={styles.text}>2. Invite Friends</Text>
          <Text style={styles.subText}>- Share your game ID</Text>
          <Text style={styles.subText}>
            - Tell your friends to click join, then insert your game ID
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
          <Text style={styles.subText}>
            - Click start game, and the questions will be displayed one by one
          </Text>
        </View>
        <MediumButton text="Back" handlePress={() => setView("HOME")} />
      </View>
    </View>
  );
}
