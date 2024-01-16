import React, { Dispatch, SetStateAction, useState } from "react";
import { Text, View, Pressable, TextInput } from "react-native";
import { styles } from "./HostOptionsStyles";

interface HostProps {
  setView: Dispatch<SetStateAction<string>>;
}

export default function HostOptions({ setView }: HostProps) {
  const [value, setValue] = useState("");

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

  const getBackButtonStyles = (isPressed: boolean) => ({
    ...styles.backButton,
    transform: isPressed
      ? [{ translateX: 7 }, { translateY: 8 }]
      : [{ translateX: 0 }, { translateY: 0 }],
    shadowOffset: isPressed ? { width: 2, height: 3 } : { width: 7, height: 8 },
    shadowOpacity: isPressed ? 0.7 : 1,
  });

  return (
    <View style={styles.buttonContainer}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={(text) => setValue(text)}
      />
      <Pressable style={styles.button}>
        <Text style={styles.text}>Host</Text>
      </Pressable>
      <Pressable
        onPress={() => setView("HOME")}
        onPressIn={() => setHostPressed(true)}
        onPressOut={() => setHostPressed(false)}
        style={() => getBackButtonStyles(hostPressed)}
      >
        <Text style={styles.text}>Back</Text>
      </Pressable>
    </View>
  );
}
