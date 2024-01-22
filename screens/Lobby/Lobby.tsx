import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import { Text, View, Alert } from "react-native";
import { styles } from "./LobbyStyles";

import { Question, postQuestionToGame } from "../../util/ApiManager";
import { validateInput } from "../../util/InputValidator";

import BigButton from "../../components/BigButton/BigButton";
import MediumButton from "../../components/MediumButton/MediumButton";
import SmallButton from "../../components/SmallButton/SmallButton";
import BigInput from "../../components/BigInput/BigInput";

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

  /*
  useEffect(() => {
    if (gameId) {
      initGameSocket(gameId, setNumQuestions);
    }

    return () => closeGameSocket();
  }, [gameId]);
  */

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
          placeholder="Add a Question ..."
          handleChange={(text: string) => setQuestion(text)}
        />
        <BigButton text="Add" handlePress={handleAddQuestion} />

        {view === "HOST_LOBBY" ? (
          <View style={styles.hostLobbyContainer}>
            <SmallButton text="Leave" handlePress={handleLeave} />
            <SmallButton text="Start" handlePress={handleStart} />
          </View>
        ) : (
          <MediumButton text="Leave" handlePress={handleLeave} />
        )}
      </View>
    </>
  );
}
