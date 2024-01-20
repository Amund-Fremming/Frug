import React, { useState } from "react";
import { Pressable, Text } from "react-native";
import { styles } from "./SmallButtonStyles.js";

interface SmallButtonProps {
  text: string;
  handlePress: () => void;
}

export default function SmallButton({ text, handlePress }: SmallButtonProps) {
  const [buttonPressed, setButtonPressed] = useState(false);

  const getButtonStyles = (isPressed: boolean) => ({
    ...styles.button,
    transform: isPressed
      ? [{ translateX: 7 }, { translateY: 8 }]
      : [{ translateX: 0 }, { translateY: 0 }],
    shadowOffset: isPressed ? { width: 2, height: 3 } : { width: 7, height: 8 },
    shadowOpacity: isPressed ? 0.7 : 1,
  });

  return (
    <>
      <Pressable
        onPress={handlePress}
        onPressIn={() => setButtonPressed(true)}
        onPressOut={() => setButtonPressed(false)}
        style={() => getButtonStyles(buttonPressed)}
      >
        <Text style={styles.text}>{text}</Text>
      </Pressable>
    </>
  );
}
