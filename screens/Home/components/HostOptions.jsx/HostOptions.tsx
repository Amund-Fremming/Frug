import React, { Dispatch, SetStateAction, useState } from "react";
import { Text, View, Pressable, TextInput } from "react-native";
import { styles } from "./HostOptionsStyles";

interface HostProps {
  setView: Dispatch<SetStateAction<string>>;
}

export default function HostOptions({ setView }: HostProps) {
  const [value, setValue] = useState("");
  const [hostPressed, setHostPressed] = useState(false);
  const [backPressed, setBackPressed] = useState(false);

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

  const onHost = () => {
    localStorage.setItem("gameId", value);
    setView("HOST_LOBBY");
  };

  return (
    <View style={styles.buttonContainer}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={(text) => setValue(text)}
      />
      <Pressable
        onPress={onHost}
        onPressIn={() => setHostPressed(true)}
        onPressOut={() => setHostPressed(false)}
        style={() => getButtonStyles(hostPressed)}
      >
        <Text style={styles.text}>Host</Text>
      </Pressable>
      <Pressable
        onPress={() => setView("HOME")}
        onPressIn={() => setBackPressed(true)}
        onPressOut={() => setBackPressed(false)}
        style={() => getBackButtonStyles(backPressed)}
      >
        <Text style={styles.text}>Back</Text>
      </Pressable>
    </View>
  );
}
