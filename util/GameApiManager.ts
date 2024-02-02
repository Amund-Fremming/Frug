const DEV_URL_BASE = "http://localhost:5088/spike/games";

export interface Voter {
  userDeviceId: number;
  gameId: string;
  vote: boolean;
}

export interface Game {
  gameId: string;
  gameStarted: boolean;
  publicGame: boolean;
  iconImage: string;
  numberOfQuestions: number;
  voters: Voter[];
}

export const getGamesSorted = async () => {
  try {
    const response = await fetch(`${DEV_URL_BASE}/gamesbyrating`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`(getGamesSorted): ${response.status}`);
    }

    const data: Game[] = await response.json();
    return data;
  } catch (error) {
    console.log(`GET not working (getGamesSorted): ${error}`);
  }
};

export const createGame = async (game: Game) => {
  try {
    const response = await fetch(DEV_URL_BASE, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(game),
    });

    console.log(response.status);

    if (response.status === 400) {
      return "GAME_EXISTS";
    }

    if (!response.ok) {
      throw new Error(`(createGame): ${response.status}`);
    }
  } catch (error) {
    console.error(`POST not working (createGame): ${error}`);
  }
};

export const deleteGame = async (gameId: string) => {
  try {
    const response = await fetch(DEV_URL_BASE, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(gameId),
    });

    if (!response.ok) {
      throw new Error(`(deleteGame):  ${response.status}`);
    }
  } catch (error) {
    console.error(`DELETE not working (deleteGame): ${error}`);
  }
};

export const startGame = async (gameId: string) => {
  try {
    const response = await fetch(`${DEV_URL_BASE}/startgame`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(gameId),
    });

    if (!response.ok) {
      throw new Error(`(startGame): ${response.status}`);
    }
  } catch (error) {
    console.error(`PUT not working (startGame): ${error}`);
  }
};

export const publishGame = async (gameId: string) => {
  try {
    const response = await fetch(`${DEV_URL_BASE}/publishgame`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(gameId),
    });

    if (!response.ok) {
      throw new Error(`(publishGame): ${response.status}`);
    }
  } catch (error) {
    console.error(`PUT not working (publishGame): ${error}`);
  }
};

export const voteOnGame = async (voter: Voter) => {
  try {
    const response = await fetch(`${DEV_URL_BASE}/vote`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(voter),
    });

    if (!response.ok) {
      throw new Error(`(voteOnGame): ${response.status}`);
    }
  } catch (error) {
    console.error(`PUT not working (voteOnGame): ${error}`);
  }
};

export const haveGameStarted = async (gameId: string) => {
  try {
    const response = await fetch(
      `${DEV_URL_BASE}/gamestarted/?gameId=${encodeURIComponent(gameId)}`,
      {
        method: "GET",
      }
    );

    if (!response.ok) {
      throw new Error(`(isGamePublic): ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`GET not working (isGamePublic): ${error}`);
  }
};

export const gameExists = async (gameId: string) => {
  try {
    const response = await fetch(
      `${DEV_URL_BASE}/gameexists/?gameId=${encodeURIComponent(gameId)}`,
      {
        method: "GET",
      }
    );

    if (!response.ok) {
      throw new Error(`(gameExists): ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`GET not working (gameExists): ${error}`);
  }
};
