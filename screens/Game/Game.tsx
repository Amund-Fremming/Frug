import { Text, View, Image, Pressable } from "react-native";
import { styles, imageStyle } from "./GameStyles";
import { useState, useEffect, SetStateAction, Dispatch } from "react";

import { fetchQuestionsForGame } from "../../util/ApiManager";
import { Question } from "../../util/ApiManager";

import BigButton from "../../components/BigButton/BigButton";

interface GameProps {
  gameId: string;
  setGameId: Dispatch<SetStateAction<string>>;
  setView: Dispatch<SetStateAction<string>>;
}

export default function Game({ setGameId, setView, gameId }: GameProps) {
  const [nextButtonText, setNextButtonText] = useState("Start Game");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [question, setQuestion] = useState("");

  const mascot = require("../../assets/images/raptorrune.png");

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    const fetchedQuestions = await fetchQuestionsForGame(gameId);
    setQuestions(fetchedQuestions);
  };

  const handleNextQuestion = () => {
    setNextButtonText("Next");
    /* Play animation */
    /*
        First use a function to set all four
        elements opacity too 0% then wait 2 seconds,
        or maybe take them down in reverse order for
        a smoother transition?

        Use setTimeout to delay four operations
        each operation should come after the one before
        the operation sets the opacity for the element to 100%.
        Then use typewriter effect to write out the question.
    */
    const randomIndex = Math.random() * questions.length;
    const randomQuestion = questions.at(randomIndex);

    setQuestion(
      randomQuestion === undefined
        ? "Game finished"
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

      {/* Absolute Mascot*/}
      <View style={styles.mascotContainer}>
        <Image source={mascot} style={imageStyle.mascot} />
      </View>
    </>
  );
}
