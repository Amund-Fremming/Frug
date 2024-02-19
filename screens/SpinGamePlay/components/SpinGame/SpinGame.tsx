import { Text, View, Image, ViewStyle, Alert } from "react-native";
import { styles, imageStyle } from "./SpinGameStyles";
import { useState, useEffect, SetStateAction, Dispatch, useRef } from "react";

import { fetchQuestionsForGame } from "../../../../util/QuestionApiManager";
import { Question } from "../../../../util/QuestionApiManager";
import { useIsFocused } from "@react-navigation/native";

import BigButton from "../../../../components/BigButton/BigButton";

interface GameProps {
  gameId: string;
  setGameId: Dispatch<SetStateAction<string>>;
  setView: Dispatch<SetStateAction<string>>;
}

export default function SpinGame({ setGameId, setView, gameId }: GameProps) {
  const [nextButtonText, setNextButtonText] = useState("Start Game");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [question, setQuestion] = useState("");
  const [finishedGame, setFinishedGame] = useState(false);

  const [dotOne, setDotOne] = useState(false);
  const [dotTwo, setDotTwo] = useState(false);
  const [dotThree, setDotThree] = useState(false);
  const [textbox, setTextbox] = useState(false);

  const [nextClickable, setNextClickable] = useState(false);

  const mascot = require("../../../../assets/images/raptorrune.png");

  const successfullFetchRef = useRef(true);
  const isFocused = useIsFocused();
  const alertDisplayed = useRef(false);

  useEffect(() => {
    fetchQuestions();
    alertDisplayed.current = false;

    const fetchId = setInterval(() => {
      if (!successfullFetchRef.current) {
        fetchQuestions();
      }

      if (!isFocused) {
        clearInterval(fetchId);
      }

      if (!successfullFetchRef.current && !alertDisplayed.current) {
        Alert.alert(
          "Bad connection",
          "Please check your wifi connection, and try again."
        );
      }

      alertDisplayed.current = true;
    }, 4000);

    return () => clearInterval(fetchId);
  }, [isFocused]);

  const fetchQuestions = async () => {
    try {
      const fetchedQuestions: Question[] = await fetchQuestionsForGame(gameId); // error
      setQuestions(fetchedQuestions);
      setNextClickable(true);
      successfullFetchRef.current = true;
    } catch (error) {
      successfullFetchRef.current = false;
    }
  };

  const toggleDotThree = (activated: boolean): ViewStyle => ({
    ...styles.questionAnimationDotOne,
    display: activated ? "flex" : "none",
  });

  const toggleDotTwo = (activated: boolean): ViewStyle => ({
    ...styles.questionAnimationDotTwo,
    display: activated ? "flex" : "none",
  });

  const toggleDotOne = (activated: boolean): ViewStyle => ({
    ...styles.questionAnimationDotThree,
    display: activated ? "flex" : "none",
  });

  const toggleTextbox = (activated: boolean): ViewStyle => ({
    ...styles.questionAnimationTextbox,
    display: activated ? "flex" : "none",
  });

  const handleNextQuestion = () => {
    if (!nextClickable) return;

    setNextClickable(false);
    setNextButtonText("Next");

    setTextbox(false);
    setDotThree(false);
    setDotTwo(false);

    setDotOne(true);
    setTimeout(() => {
      setDotTwo(true);
    }, 150);
    setTimeout(() => {
      setDotThree(true);
    }, 300);
    setTimeout(() => {
      setTextbox(true);
      setNextClickable(true);
    }, 450);

    const randomIndex = Math.random() * questions.length;
    const randomQuestion = questions.at(randomIndex);

    if (randomQuestion === undefined) {
      setFinishedGame(true);
    } else {
      if (questions.length == 1) {
        setFinishedGame(true);
      }

      setQuestion(randomQuestion.questionStr);
    }

    setQuestions(questions.filter((q) => q !== randomQuestion));
  };

  const handleLeave = () => {
    setGameId("");
    setView("HOME");
  };

  return (
    <>
      <View style={styles.gameContainer}>
        <Image source={mascot} style={imageStyle.mascot} />

        <View style={styles.buttonContainer}>
          {!finishedGame && (
            <>
              <BigButton
                text={nextButtonText}
                handlePress={handleNextQuestion}
              />
              <BigButton text="Leave" handlePress={handleLeave} />
            </>
          )}

          {finishedGame && <BigButton text="Done" handlePress={handleLeave} />}
        </View>
      </View>

      <View style={styles.questionAnimationContainer}>
        <View style={toggleTextbox(textbox)}>
          <Text style={styles.text}>{question}</Text>
        </View>
        <View style={toggleDotOne(dotOne)}></View>
        <View style={toggleDotTwo(dotTwo)}></View>
        <View style={toggleDotThree(dotThree)}></View>
      </View>
    </>
  );
}
