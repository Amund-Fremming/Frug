import {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
} from "react";

interface IGamePlayContext {
  view: string;
  setView: Dispatch<SetStateAction<string>>;
  gameId: string;
  setGameId: Dispatch<SetStateAction<string>>;
  deviceId: string;
  setDeviceId: Dispatch<SetStateAction<string>>;
}

const defaultContextValue: IGamePlayContext = {
  view: "",
  setView: () => {},
  gameId: "",
  setGameId: () => {},
  deviceId: "",
  setDeviceId: () => {},
};

const GamePlayContext = createContext<IGamePlayContext>(defaultContextValue);

export const useGamePlayProvider = () => useContext(GamePlayContext);

export const GamePlayProvider = ({ children }: { children: ReactNode }) => {
  const [view, setView] = useState<string>("HOME");
  const [gameId, setGameId] = useState<string>("");
  const [deviceId, setDeviceId] = useState<string>("");

  const value = {
    view,
    setView,
    gameId,
    setGameId,
    deviceId,
    setDeviceId,
  };

  return (
    <GamePlayContext.Provider value={value}>
      {children}
    </GamePlayContext.Provider>
  );
};
