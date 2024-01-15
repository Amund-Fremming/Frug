import React, { Dispatch, SetStateAction } from "react";
import { Text, View, Pressable } from "react-native";
import { styles } from "./HomeOptionsStyles";

interface HomeProps {
  setView: Dispatch<SetStateAction<string>>;
}

export default function HomeOptions({ setView }: HomeProps) {
  return (
    <>
      <View style={styles.buttonContainer}>
        <Pressable onPress={() => setView("HOST")} style={styles.hostButton}>
          <Text style={styles.text}>Host</Text>
        </Pressable>
        <Pressable onPress={() => setView("JOIN")} style={styles.joinButton}>
          <Text style={styles.text}>Join</Text>
        </Pressable>
      </View>
    </>
  );
}
