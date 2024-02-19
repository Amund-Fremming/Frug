import { GamePlayProvider } from "./providers/GamePlayProvider";
import { SpinGamePlayProvider } from "./providers/SpinGamePlayProvider";
import { TabNavigator } from "./navigators/TabNavigator";

export default function App() {
  return (
    <GamePlayProvider>
      <SpinGamePlayProvider>
        <TabNavigator />
      </SpinGamePlayProvider>
    </GamePlayProvider>
  );
}
