import React, { useState, Dispatch, SetStateAction, useEffect } from "react";
import { Text, View, Alert } from "react-native";
import { styles } from "./LobbyStyles";

import { Question, postQuestionToGame } from "../../util/ApiManager";
import { validateInput } from "../../util/InputValidator";

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

    connection.on("ReceiveQuestionCount", (gameId: string, count: number) => {
      setNumQuestions(count);
    });

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
    await postQuestionToGame(newQuestion);
  };

  const handleStart = () => {
    setView("GAME");
  };

  return (
    <>
      <Text style={styles.numberOfQuestionsDisplay}>{numQuestions}</Text>

      <View style={styles.buttonContainer}>
        <Text style={styles.gameIdDisplay}>{gameId}</Text>
        <BigInput
          value={question}
          placeholder="Legg til spørsmål ..."
          handleChange={(text: string) => setQuestion(text)}
        />
        <BigButton text="Legg til" handlePress={handleAddQuestion} />

        {view === "HOST_LOBBY" ? (
          <View style={styles.hostLobbyContainer}>
            <SmallButton text="Hjem" handlePress={handleLeave} />
            <SmallButton text="Start" handlePress={handleStart} />
          </View>
        ) : (
          <MediumButton text="Tilbake" handlePress={handleLeave} />
        )}
      </View>
    </>
  );
}
