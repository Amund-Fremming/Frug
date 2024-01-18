import React, { useState, Dispatch, SetStateAction } from "react";
import { Text, View, Pressable, TextInput, Image, Alert } from "react-native";
import { styles, imageStyles } from "./LobbyStyles";

import { Question, postQuestionToGame } from "../../util/ApiManager";
import { validateInput } from "../../util/InputValidator";

interface LobbyProps {
  setGameId: Dispatch<SetStateAction<string>>;
  gameId: string;
  setView: Dispatch<SetStateAction<string>>;
  view: string;
}

export default function Lobby({
  setGameId,
  gameId,
  setView,
  view,
}: LobbyProps) {
  const [addPressed, setAddPressed] = useState(false);
  const [leavePressed, setLeavePressed] = useState(false);
  const [startPressed, setStartPressed] = useState(false);

  const [question, setQuestion] = useState("");

  const rover = require("../../assets/images/rover.png");

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

  const handleLeave = () => {
    setGameId("");
    setView("HOME");
  };

  const handleAddQuestion = async () => {
    if (!validateInput(question)) {
      Alert.alert(
        "Invalid Input",
        "Some characters are not allowed, try again"
      );
      return;
    }

    const newQuestion: Question = {
      gameId: gameId,
      questionStr: question,
    };

    await postQuestionToGame(newQuestion);
    setQuestion("");
  };

  const handleStart = () => {
    setView("GAME");
  };

  return (
    <View style={styles.buttonContainer}>
      <View style={styles.inputContainer}>
        {view === "LOBBY" ? (
          <Image source={rover} style={imageStyles.rover} />
        ) : (
          <Text style={styles.gameIdDisplay}>{gameId}</Text>
        )}

        <TextInput
          placeholder="Write a question ..."
          value={question}
          onChangeText={(text: string) => setQuestion(text)}
          style={styles.input}
        />
      </View>
      <Pressable
        onPress={handleAddQuestion}
        onPressIn={() => setAddPressed(true)}
        onPressOut={() => setAddPressed(false)}
        style={() => getButtonStyles(addPressed)}
      >
        <Text style={styles.text}>Add</Text>
      </Pressable>

      {view === "HOST_LOBBY" && (
        <Pressable
          onPress={handleStart}
          onPressIn={() => setStartPressed(true)}
          onPressOut={() => setStartPressed(false)}
          style={() => getBackButtonStyles(startPressed)}
        >
          <Text style={styles.text}>Start</Text>
        </Pressable>
      )}

      <Pressable
        onPress={handleLeave}
        onPressIn={() => setLeavePressed(true)}
        onPressOut={() => setLeavePressed(false)}
        style={() => getBackButtonStyles(leavePressed)}
      >
        <Text style={styles.text}>Leave</Text>
      </Pressable>
    </View>
  );
}
