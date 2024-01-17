import React, { Dispatch, SetStateAction, useState } from "react";
import { Text, View, Pressable, TextInput } from "react-native";
import { styles } from "./GameOptionsStyles";

interface HostProps {
  setView: Dispatch<SetStateAction<string>>;
  view: string;
  setGameId: Dispatch<SetStateAction<string>>;
}

export default function GameOptions({ view, setView, setGameId }: HostProps) {
  const [value, setValue] = useState("");
  const [buttonPressed, setButtonPressed] = useState(false);
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

  const handleClick = () => {
    setGameId(value);
    setView(view === "HOST" ? "HOST_LOBBY" : "LOBBY");
  };

  return (
    <View style={styles.buttonContainer}>
      <TextInput
        placeholder="Game id"
        style={styles.input}
        value={value}
        onChangeText={(text) => setValue(text)}
      />
      <Pressable
        onPress={handleClick}
        onPressIn={() => setButtonPressed(true)}
        onPressOut={() => setButtonPressed(false)}
        style={() => getButtonStyles(buttonPressed)}
      >
        <Text style={styles.text}>{view === "HOST" ? "Host" : "Join"}</Text>
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
