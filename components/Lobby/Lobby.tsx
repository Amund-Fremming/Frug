import React, { useState, Dispatch, SetStateAction } from "react";
import { Text, View, Pressable, TextInput, Image, Alert } from "react-native";
import { styles, imageStyles } from "./LobbyStyles";

import { Question, postQuestionToGame } from "../../util/ApiManager";
import { validateInput } from "../../util/InputValidator";

import BigButton from "../BigButton/BigButton";
import MediumButton from "../MediumButton/MediumButton";

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

  const getBackButtonStyles = (isPressed: boolean) => ({
    ...styles.backButton,
    transform: isPressed
      ? [{ translateX: 7 }, { translateY: 8 }]
      : [{ translateX: 0 }, { translateY: 0 }],
    shadowOffset: isPressed ? { width: 2, height: 3 } : { width: 7, height: 8 },
    shadowOpacity: isPressed ? 0.7 : 1,
  });

  const getHostButtonStyles = (isPressed: boolean) => ({
    ...styles.hostLobbyLeaveAndStart,
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

    setQuestion("");
    await postQuestionToGame(newQuestion);
  };

  const handleStart = () => {
    setView("GAME");
  };

  return (
    <>
      <Text style={styles.numQuestions}>32</Text>

      <View style={styles.buttonContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.gameIdDisplay}>{gameId}</Text>
          <TextInput
            placeholder="Write a question ..."
            value={question}
            onChangeText={(text: string) => setQuestion(text)}
            style={styles.input}
          />
        </View>
        <BigButton text="Add" handlePress={handleAddQuestion} />

        {view === "HOST_LOBBY" ? (
          <View style={styles.hostLobbyContainer}>
            <Pressable
              onPress={handleLeave}
              onPressIn={() => setLeavePressed(true)}
              onPressOut={() => setLeavePressed(false)}
              style={() => getHostButtonStyles(leavePressed)}
            >
              <Text style={styles.hostText}>Leave</Text>
            </Pressable>
            <Pressable
              onPress={handleStart}
              onPressIn={() => setStartPressed(true)}
              onPressOut={() => setStartPressed(false)}
              style={() => getHostButtonStyles(startPressed)}
            >
              <Text style={styles.hostText}>Start</Text>
            </Pressable>
          </View>
        ) : (
          <>
            <Pressable
              onPress={handleLeave}
              onPressIn={() => setLeavePressed(true)}
              onPressOut={() => setLeavePressed(false)}
              style={() => getBackButtonStyles(leavePressed)}
            >
              <Text style={styles.text}>Leave</Text>
            </Pressable>
          </>
        )}
      </View>
    </>
  );
}
