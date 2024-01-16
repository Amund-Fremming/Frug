import React, { Dispatch, SetStateAction, useState } from "react";
import { Text, View, Pressable } from "react-native";
import { styles } from "./HomeOptionsStyles";

interface HomeProps {
  setView: Dispatch<SetStateAction<string>>;
}

export default function HomeOptions({ setView }: HomeProps) {
  const [hostPressed, setHostPressed] = useState(false);
  const [joinPressed, setJoinPressed] = useState(false);

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
      <View style={styles.buttonContainer}>
        <Pressable
          onPress={() => setView("HOST")}
          onPressIn={() => setHostPressed(true)}
          onPressOut={() => setHostPressed(false)}
          style={() => getButtonStyles(hostPressed)}
        >
          <Text style={styles.text}>Host</Text>
        </Pressable>
        <Pressable
          onPress={() => setView("JOIN")}
          onPressIn={() => setJoinPressed(true)}
          onPressOut={() => setJoinPressed(false)}
          style={() => getButtonStyles(joinPressed)}
        >
          <Text style={styles.text}>Join</Text>
        </Pressable>
      </View>
    </>
  );
}
