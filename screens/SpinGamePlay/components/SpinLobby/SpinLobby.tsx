import React, { useState, Dispatch, SetStateAction, useEffect } from "react";
import { Text, View, Alert } from "react-native";
import { styles } from "./SpinLobbyStyles";

import {
  Question,
  addQuestionToGame,
} from "../../../../util/QuestionApiManager";
import { validateInput } from "../../../../util/InputValidator";
import { publishGame, startGame } from "../../../../util/GameApiManager";

import BigButton from "../../../../components/BigButton/BigButton";
import MediumButton from "../../../../components/MediumButton/MediumButton";
import SmallButton from "../../../../components/SmallButton/SmallButton";
import BigInput from "../../../../components/BigInput/BigInput";

import {
  startConnection,
  createConnection,
  stopConnection,
} from "../../../../util/GameHub";

interface LobbyProps {
  setGameId: Dispatch<SetStateAction<string>>;
  gameId: string;
  setView: Dispatch<SetStateAction<string>>;
  view: string;
}

export default function SpinLobby({
  setGameId,
  gameId,
  setView,
  view,
}: LobbyProps) {
  const [question, setQuestion] = useState("");
  const [numQuestions, setNumQuestions] = useState<number>(0);
  const [lobbyState, setLobbyState] = useState<string>("LOBBY");

  useEffect(() => {
    const connection = createConnection();

    startConnection(connection);

    connection.on(
      "ReceiveQuestionCount",
      (gameIdParam: string, count: number) => {
        if (gameId === gameIdParam) setNumQuestions(count);
      }
    );

    connection.on("SpinGameState", (gameIdParam: string, state: string) => {
      if (gameId === gameIdParam) {
        if (state === "FINISHED") {
          setView("SPIN_HOME");
          return;
        }

        setLobbyState(state);
      }
    });

    return () => stopConnection(connection);
  }, []);

  const handleLeave = () => {
    setGameId("");
    setView("SPIN_HOME");
  };

  const handleAddQuestion = async () => {
    if (!validateInput(question) || question.length > 150) {
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
    try {
      await addQuestionToGame(newQuestion);
    } catch (error) {
      Alert.alert(
        "Bad connection",
        "Please check your wifi connection and try again."
      );
    }
  };

  const handleStart = async () => {
    Alert.alert("Public Game", "Publish your game? Select a category:", [
      {
        text: "Nice",
        onPress: () => handlePublishAndStartGame("NICE"),
      },
      {
        text: "Edgy",
        onPress: () => handlePublishAndStartGame("EDGY"),
      },
      {
        text: "Dirty",
        onPress: () => handlePublishAndStartGame("DIRTY"),
      },
      {
        text: "No",
        onPress: () => handleStartGameOnly(),
      },
    ]);
  };

  const handlePublishAndStartGame = async (category: string) => {
    try {
      await publishGame(gameId, category);
      await startGame(gameId);
      setView("SPIN_GAME");
    } catch (error) {
      Alert.alert(
        "Bad connection",
        "Please check your wifi connection and try again."
      );
    }
  };

  const handleStartGameOnly = async () => {
    try {
      await startGame(gameId);
      setView("SPIN_GAME");
    } catch (error) {
      Alert.alert(
        "Bad connection",
        "Please check your wifi connection and try again."
      );
    }
  };

  if (lobbyState === "WAITING") {
    return (
      <View style={styles.waitingContainer}>
        <Text style={styles.waitingText}>Waiting</Text>
        <Text style={styles.waitingText}>for</Text>
        <Text style={styles.waitingText}>Spin</Text>
      </View>
    );
  }

  if (lobbyState === "LOBBY") {
    return (
      <>
        <View style={styles.buttonContainer}>
          <Text style={styles.numberOfQuestionsDisplay}>{numQuestions}</Text>
          <View style={styles.buttonWrapper}>
            <Text style={styles.gameIdDisplay}>{gameId}</Text>
            <BigInput
              value={question}
              placeholder="Who´s got to ..."
              handleChange={(text: string) => setQuestion(text)}
            />
            <BigButton text="Add" handlePress={handleAddQuestion} />

            {view === "SPIN_HOST_LOBBY" && (
              <View style={styles.hostLobbyContainer}>
                <SmallButton text="Back" handlePress={handleLeave} />
                <SmallButton text="Start" handlePress={handleStart} />
              </View>
            )}

            {view === "SPIN_LOBBY" && (
              <MediumButton text="Back" handlePress={handleLeave} />
            )}
          </View>
        </View>
      </>
    );
  }
}
