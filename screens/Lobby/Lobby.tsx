import React, { useState, Dispatch, SetStateAction, useEffect } from "react";
import { Text, View, Alert } from "react-native";
import { styles } from "./LobbyStyles";

import { Question, addQuestionToGame } from "../../util/QuestionApiManager";
import { validateInput } from "../../util/InputValidator";
import { publishGame, startGame } from "../../util/GameApiManager";

import BigButton from "../../components/BigButton/BigButton";
import MediumButton from "../../components/MediumButton/MediumButton";
import SmallButton from "../../components/SmallButton/SmallButton";
import BigInput from "../../components/BigInput/BigInput";

import {
  startConnection,
  createConnection,
  stopConnection,
} from "../../util/GameHub";

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
  const [question, setQuestion] = useState("");
  const [numQuestions, setNumQuestions] = useState<number>(0);

  useEffect(() => {
    const connection = createConnection();

    startConnection(connection);

    connection.on(
      "ReceiveQuestionCount",
      (gameIdParam: string, count: number) => {
        if (gameId === gameIdParam) setNumQuestions(count);
      }
    );

    return () => stopConnection(connection);
  }, []);

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
    await addQuestionToGame(newQuestion);
  };

  const handleStart = async () => {
    Alert.alert(
      "Public Game",
      "Do you want to publish your game so other people can play it, if so, choose a category:",
      [
        {
          text: "Nice",
          onPress: async () => {
            await publishGame(gameId, "NICE");
            await startGame(gameId);
            setView("GAME");
          },
        },
        {
          text: "Edgy",
          onPress: async () => {
            await publishGame(gameId, "EDGY");
            await startGame(gameId);
            setView("GAME");
          },
        },
        {
          text: "Dirty",
          onPress: async () => {
            await publishGame(gameId, "DIRTY");
            await startGame(gameId);
            setView("GAME");
          },
        },
        {
          text: "No",
          onPress: async () => {
            await startGame(gameId);
            setView("GAME");
          },
        },
      ]
    );
  };

  return (
    <>
      <Text style={styles.numberOfQuestionsDisplay}>{numQuestions}</Text>

      <View style={styles.buttonContainer}>
        <Text style={styles.gameIdDisplay}>{gameId}</Text>
        <BigInput
          value={question}
          placeholder="Add questions ..."
          handleChange={(text: string) => setQuestion(text)}
        />
        <BigButton text="Add" handlePress={handleAddQuestion} />

        {view === "HOST_LOBBY" ? (
          <View style={styles.hostLobbyContainer}>
            <SmallButton text="Back" handlePress={handleLeave} />
            <SmallButton text="Start" handlePress={handleStart} />
          </View>
        ) : (
          <MediumButton text="Back" handlePress={handleLeave} />
        )}
      </View>
    </>
  );
}
