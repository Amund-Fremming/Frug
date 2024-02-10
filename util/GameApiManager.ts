// const GAME_URL_BASE = "http://localhost:5088/spike/games";
const GAME_URL_BASE = "https://trike.azurewebsites.net/spike/games";

export interface IGame {
  gameId: string;
  gameStarted: boolean;
  publicGame: boolean;
  iconImage: string;
  numberOfQuestions: number;
  creatorId: string;
  percentageUpvotes: number;
  usersVote: number;
}

export const getGamesSorted = async (deviceId: string) => {
  try {
    const response = await fetch(`${GAME_URL_BASE}/gamesbyrating`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(deviceId),
    });

    if (!response.ok) {
      throw new Error(`(getGamesSorted): ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`POST not working (getGamesSorted): ${error}`);
  }
};

export const createGame = async (game: IGame) => {
  try {
    const response = await fetch(GAME_URL_BASE, {
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
    const response = await fetch(GAME_URL_BASE, {
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
    const response = await fetch(`${GAME_URL_BASE}/startgame`, {
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

export const publishGame = async (gameId: string, icon: string) => {
  try {
    const response = await fetch(
      `${GAME_URL_BASE}/publishgame/?gameId=${encodeURIComponent(gameId)}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(icon),
      }
    );

    if (!response.ok) {
      throw new Error(`(publishGame): ${response.status}`);
    }
  } catch (error) {
    console.error(`PUT not working (publishGame): ${error}`);
  }
};

export const haveGameStarted = async (gameId: string) => {
  try {
    const response = await fetch(
      `${GAME_URL_BASE}/gamestarted/?gameId=${encodeURIComponent(gameId)}`,
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
      `${GAME_URL_BASE}/gameexists/?gameId=${encodeURIComponent(gameId)}`,
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

export const searchForGames = async (
  searchString: string,
  deviceId: string
) => {
  try {
    const response = await fetch(
      `${GAME_URL_BASE}/searchgames/?searchString=${encodeURIComponent(
        searchString
      )}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(deviceId),
      }
    );

    if (!response.ok) {
      throw new Error(`(searchForGames): ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`GET not working (searchForGames): ${error}`);
  }
};

export const usersGames = async (deviceId: string) => {
  try {
    const response = await fetch(
      `${GAME_URL_BASE}/usersgames/?deviceId=${encodeURIComponent(deviceId)}`,
      {
        method: "GET",
      }
    );

    if (!response.ok) {
      throw new Error(`(usersGames): ${response.status}`);
    }

    const data: IGame[] | undefined = await response.json();
    return data;
  } catch (error) {
    console.error(`GET not working (usersGames): ${error}`);
  }
};

export const likedGames = async (deviceId: string) => {
  try {
    const response = await fetch(
      `${GAME_URL_BASE}/likedgames/?deviceId=${encodeURIComponent(deviceId)}`,
      {
        method: "GET",
      }
    );

    if (!response.ok) {
      throw new Error(`(likedGames): ${response.status}`);
    }

    const data: IGame[] | undefined = await response.json();
    return data;
  } catch (error) {
    console.error(`GET not working (likedGames): ${error}`);
  }
};
