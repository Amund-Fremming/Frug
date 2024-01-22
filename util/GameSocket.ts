import * as signalR from "@microsoft/signalr";

const URL_BASE = "trike.azurewebsites.net/spike";
const DEV_URL_BASE = "localhost:5088/spike";

let connection: signalR.HubConnection | null = null;

export const initGameSocket = (
  gameId: string,
  onQuestionCountUpdate: (count: number) => void
): void => {
  connection = new signalR.HubConnectionBuilder()
    .withUrl(`ws://${DEV_URL_BASE}`)
    .configureLogging(signalR.LogLevel.Information)
    .build();

  connection
    .start()
    .then(() => console.log("Connected to game hub"))
    .catch((err) => console.error("Error connecting to game hub:", err));

  connection.on(
    "ReceiveQuestionCountUpdate",
    (updatedGameId, questionCount) => {
      if (gameId === updatedGameId) {
        onQuestionCountUpdate(questionCount);
      }
    }
  );
};

export const closeGameSocket = (): void => {
  if (connection) {
    connection
      .stop()
      .then(() => console.log("Disconnected from game hub"))
      .catch((err) => console.error("Error disconnecting from game hub:", err));
  }
};
