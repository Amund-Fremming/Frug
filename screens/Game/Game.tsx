import { Text, View, Image, ViewStyle } from "react-native";
import { styles, imageStyle } from "./GameStyles";
import { useState, useEffect, SetStateAction, Dispatch } from "react";

import { fetchQuestionsForGame } from "../../util/QuestionApiManager";
import { Question } from "../../util/QuestionApiManager";

import BigButton from "../../components/BigButton/BigButton";

interface GameProps {
  gameId: string;
  setGameId: Dispatch<SetStateAction<string>>;
  view: string;
  setView: Dispatch<SetStateAction<string>>;
}

export default function Game({ setGameId, setView, gameId, view }: GameProps) {
  const [nextButtonText, setNextButtonText] = useState("Start Game");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [question, setQuestion] = useState("");

  const [dotOne, setDotOne] = useState(false);
  const [dotTwo, setDotTwo] = useState(false);
  const [dotThree, setDotThree] = useState(false);
  const [textbox, setTextbox] = useState(false);

  const [nextClickable, setNextClickable] = useState(false);

  const mascot = require("../../assets/images/raptorrune.png");

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    const fetchedQuestions: Question[] = await fetchQuestionsForGame(gameId);
    setQuestions(fetchedQuestions);
    setNextClickable(true);
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

    setQuestion(
      randomQuestion === undefined
        ? "Game Finished!"
        : randomQuestion.questionStr
    );

    setQuestions(questions.filter((q) => q !== randomQuestion));
  };

  const handleLeave = () => {
    setGameId("");
    setView("HOME");
  };

  return (
    <>
      <View style={styles.gameContainer}>
        <View style={styles.buttonContainer}>
          <BigButton text={nextButtonText} handlePress={handleNextQuestion} />
          <BigButton text="Leave" handlePress={handleLeave} />
        </View>
      </View>

      {/* Game Animation */}
      <View style={styles.questionAnimationContainer}>
        <View style={toggleTextbox(textbox)}>
          <Text style={styles.text}>{question}</Text>
        </View>
        <View style={toggleDotOne(dotOne)}></View>
        <View style={toggleDotTwo(dotTwo)}></View>
        <View style={toggleDotThree(dotThree)}></View>
      </View>

      {/* Absolute Mascot*/}
      <View style={styles.mascotContainer}>
        <Image source={mascot} style={imageStyle.mascot} />
      </View>
    </>
  );
}
