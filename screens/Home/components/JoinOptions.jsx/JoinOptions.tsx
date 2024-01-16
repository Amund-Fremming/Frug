import React, { Dispatch, SetStateAction, useState } from "react";
import { Text, View, Pressable, TextInput } from "react-native";
import { styles } from "./JoinOptionsStyles";

interface HostProps {
  setView: Dispatch<SetStateAction<string>>;
}

export default function JoinOptions({ setView }: HostProps) {
  const [value, setValue] = useState("");
  const [joinPressed, setJoinPressed] = useState(false);
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

  const onJoin = () => {
    localStorage.setItem("gameId", value);
    setView("LOBBY");
  };

  return (
    <View style={styles.buttonContainer}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={(text) => setValue(text)}
      />
      <Pressable
        onPress={onJoin}
        onPressIn={() => setJoinPressed(true)}
        onPressOut={() => setJoinPressed(false)}
        style={() => getButtonStyles(joinPressed)}
      >
        <Text style={styles.text}>Join</Text>
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
