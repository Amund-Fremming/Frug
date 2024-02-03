import * as signalR from "@microsoft/signalr";

const URL_BASE = "http://localhost:5088";

export const createConnection = () => {
  return new signalR.HubConnectionBuilder()
    .withUrl(`${URL_BASE}/gamehub`)
    .configureLogging(signalR.LogLevel.Information)
    .build();
};

export const startConnection = (connection) => {
  return connection
    .start()
    .then(() => console.log("Connection started"))
    .catch((err) => console.error("GameHub Error: ", err));
};

export const stopConnection = (connection) => {
  return connection
    .stop()
    .then(() => console.log("Connection stopped"))
    .catch((err) => console.error("Error while stopping connection: ", err));
};
