// const QUESTION_URL_BASE = "http://localhost:5088/spike/questions";
const QUESTION_URL_BASE = "https://trike.azurewebsites.net/spike/questions";

export interface Question {
  gameId: string;
  questionStr: string;
}

export const fetchQuestionsForGame = async (gameId: string) => {
  try {
    const response = await fetch(
      `${QUESTION_URL_BASE}?gameId=${encodeURIComponent(gameId)}`,
      {
        method: "GET",
      }
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    throw new Error(`GET not working: ${error}`);
  }
};

export const addQuestionToGame = async (question: Question) => {
  try {
    const response = await fetch(QUESTION_URL_BASE, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(question),
    });

    if (!response.ok) {
      throw new Error(`Error:  ${response.status}`);
    }

    const data = await response.text();
    return data;
  } catch (error) {
    throw new Error(`POST not working: ${error}`);
  }
};
