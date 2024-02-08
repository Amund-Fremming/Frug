import { View, FlatList, ActivityIndicator } from "react-native";
import { styles } from "./HomeScreenStyles";
import { PublicGameCard } from "../../components/PublicGameCard/PublicGameCard";
import { useGamePlayProvider } from "../../providers/GamePlayProvider";
import { useEffect, useState } from "react";
import { IGame } from "../../util/GameApiManager";
import { usersGames, likedGames } from "../../util/GameApiManager";
import { TabsBanner } from "../../components/TabsBanner/TabsBanner";
import { useIsFocused } from "@react-navigation/native";

export interface ITabsStyles {
  createdView: boolean;
  createdBorderColor: string;
  likedBorderColor: string;
  createdTextColor: string;
  likedTextColor: string;
}

export function HomeScreen() {
  const { deviceId, setView, view, setGameId } = useGamePlayProvider();
  const isFocused = useIsFocused();

  const [spinner, setSpinner] = useState(false);
  const [myCreatedGames, setMyCreatedGames] = useState<IGame[] | undefined>([]);
  const [myLikedGames, setMyLikedGames] = useState<IGame[] | undefined>([]);
  const [tabStyles, setTabStyles] = useState<ITabsStyles>({
    createdView: true,
    createdBorderColor: "#FF6347",
    likedBorderColor: "transparent",
    createdTextColor: "white",
    likedTextColor: "gray",
  });

  useEffect(() => {
    if (isFocused) fetchCreatedGames();
  }, [isFocused]);

  const fetchLikedGames = async () => {
    setSpinner(true);
    const likedResponse = await likedGames(deviceId);
    setMyLikedGames(likedResponse);
    setSpinner(false);
  };

  const fetchCreatedGames = async () => {
    setSpinner(true);
    const createResponse = await usersGames(deviceId);
    setMyCreatedGames(createResponse);
    setSpinner(false);
  };

  const handleTabPressed = (createdTab: boolean) => {
    setTabStyles({
      ...tabStyles,
      createdView: createdTab,
      createdTextColor: createdTab ? "white" : "gray",
      likedTextColor: createdTab ? "gray" : "white",
      createdBorderColor: createdTab ? "#FF6347" : "transparent",
      likedBorderColor: createdTab ? "transparent" : "#FF6347",
    });

    createdTab ? fetchCreatedGames() : fetchLikedGames();
  };

  if (spinner) {
    return (
      <>
        <TabsBanner tabStyles={tabStyles} handleTabPressed={handleTabPressed} />
        <View style={styles.spinnerStyles}>
          <ActivityIndicator size="large" color="#604395" />
        </View>
      </>
    );
  }

  return (
    <View style={styles.container}>
      <TabsBanner tabStyles={tabStyles} handleTabPressed={handleTabPressed} />
      <FlatList
        style={{
          width: "100%",
          marginBottom: 70,
        }}
        contentContainerStyle={{
          paddingHorizontal: "5%",
          flexGrow: 1,
          marginTop: 15,
          paddingBottom: 30,
        }}
        data={tabStyles.createdView ? myCreatedGames : myLikedGames}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.gameId}
        renderItem={({ item }) => (
          <PublicGameCard
            game={item}
            setView={setView}
            setGameId={setGameId}
            deviceId={deviceId}
          />
        )}
      />
    </View>
  );
}
