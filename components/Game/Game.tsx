import { Text, View, Image, Pressable } from "react-native";
import { styles, imageStyle } from "./GameStyles";
import { useState, SetStateAction, Dispatch } from "react";

interface GameProps {
  setGameId: Dispatch<SetStateAction<string>>;
  setView: Dispatch<SetStateAction<string>>;
}

export default function Game({ setGameId, setView }: GameProps) {
  const [initPress, setInitPress] = useState(false);
  const [nextPressed, setNextPressed] = useState(false);
  const [leavePressed, setLeavePressed] = useState(false);

  const mascot = require("../../assets/images/raptorrune.png");

  const getButtonStyles = (isPressed: boolean) => ({
    ...styles.button,
    transform: isPressed
      ? [{ translateX: 7 }, { translateY: 8 }]
      : [{ translateX: 0 }, { translateY: 0 }],
    shadowOffset: isPressed ? { width: 2, height: 3 } : { width: 7, height: 8 },
    shadowOpacity: isPressed ? 0.7 : 1,
  });

  const handleNext = () => {
    // Play animation
    // remove current questionb ?
    // take out a new question and display
  };

  const handleLeave = () => {
    setGameId("");
    setView("HOME");
  };

  return (
    <>
      <View style={styles.gameContainer}>
        <View style={styles.buttonContainer}>
          <Pressable
            style={() => getButtonStyles(nextPressed)}
            onPress={handleNext}
            onPressIn={() => setNextPressed(true)}
            onPressOut={() => setNextPressed(false)}
          >
            <Text style={styles.text}>Next</Text>
          </Pressable>
          <Pressable
            style={() => getButtonStyles(leavePressed)}
            onPress={handleLeave}
            onPressIn={() => setLeavePressed(true)}
            onPressOut={() => setLeavePressed(false)}
          >
            <Text style={styles.text}>Leave</Text>
          </Pressable>
        </View>
      </View>

      {/* Absolute Mascot*/}
      <View style={styles.mascotContainer}>
        <Image source={mascot} style={imageStyle.mascot} />
      </View>
    </>
  );
}
