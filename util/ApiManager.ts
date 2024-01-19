const URL_BASE = "trike.azurewebsites.net/spike";
const DEV_URL_BASE = "http://localhost:5088/spike";

interface Question {
  gameId: string;
  questionStr: string;
}

const fetchQuestionsForGame = async (gameId: string) => {
  try {
    const response = await fetch(
      `${DEV_URL_BASE}?gameId=${encodeURIComponent(gameId)}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};

const postQuestionToGame = async (question: Question) => {
  try {
    const response = await fetch(DEV_URL_BASE, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(question),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.text();
    return data;
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};

export { Question, fetchQuestionsForGame, postQuestionToGame };
