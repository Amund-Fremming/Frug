import { GamePlayProvider } from "./providers/GamePlayProvider";
import { TabNavigator } from "./navigators/TabNavigator";

export default function App() {
  return (
    <GamePlayProvider>
      <TabNavigator />
    </GamePlayProvider>
  );
}
