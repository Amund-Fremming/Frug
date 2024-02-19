import {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
} from "react";

interface ISpinGamePlayContext {
  view: string;
  setView: Dispatch<SetStateAction<string>>;
  gameId: string;
  setGameId: Dispatch<SetStateAction<string>>;
  deviceId: string;
  setDeviceId: Dispatch<SetStateAction<string>>;
}

const defaultContextValue: ISpinGamePlayContext = {
  view: "",
  setView: () => {},
  gameId: "",
  setGameId: () => {},
  deviceId: "",
  setDeviceId: () => {},
};

const GamePlayContext =
  createContext<ISpinGamePlayContext>(defaultContextValue);

export const useSpinGamePlayProvider = () => useContext(GamePlayContext);

export const SpinGamePlayProvider = ({ children }: { children: ReactNode }) => {
  const [view, setView] = useState<string>("SPIN_HOME");
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
