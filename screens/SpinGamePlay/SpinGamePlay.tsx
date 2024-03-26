import SpinPlanetBackground from "../../components/SpinPlanetBackground/SpinPlanetBackground";
import { useSpinGamePlayProvider } from "../../providers/SpinGamePlayProvider";
import SpinHomeOptions from "./components/SpinHomeOptions/SpinHomeOptions";
import SpinGameOptions from "./components/SpinGameOptions/SpinGameOptions";
import SpinLobby from "./components/SpinLobby/SpinLobby";
import SpinHowTo from "./components/SpinHowTo/SpinHowTo";
import SpinGame from "./components/SpinGame/SpinGame";
import { useEffect } from "react";

export function SpinGamePlay() {
  const { view, setView, setGameId, deviceId, gameId } =
    useSpinGamePlayProvider();

  return (
    <>
      <SpinPlanetBackground view={view} />

      {view === "SPIN_HOME" && <SpinHomeOptions setView={setView} />}

      {["SPIN_HOST", "SPIN_JOIN"].includes(view) && (
        <SpinGameOptions
          view={view}
          setView={setView}
          gameId={gameId}
          setGameId={setGameId}
          deviceId={deviceId}
        />
      )}

      {["SPIN_LOBBY", "SPIN_HOST_LOBBY"].includes(view) && (
        <SpinLobby
          setGameId={setGameId}
          view={view}
          setView={setView}
          gameId={gameId}
        />
      )}

      {view === "SPIN_GAME" && (
        <SpinGame gameId={gameId} setGameId={setGameId} setView={setView} />
      )}

      {view === "SPIN_HOW_TO" && <SpinHowTo setView={setView} />}
    </>
  );
}
