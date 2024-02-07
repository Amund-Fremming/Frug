import { View, Text, FlatList } from "react-native";
import { styles } from "./HomeScreenStyles";
import { PublicGameCard } from "../../components/PublicGameCard/PublicGameCard";
import { useGamePlayProvider } from "../../providers/GamePlayProvider";
import { useEffect, useState } from "react";
import { IGame } from "../../util/GameApiManager";
import { usersGames, likedGames } from "../../util/GameApiManager";

export function HomeScreen() {
  const { deviceId, setView, view, setGameId } = useGamePlayProvider();

  const [myCreatedGames, setMyCreatedGames] = useState<IGame[] | undefined>([]);
  const [myLikedGames, setMyLikedGames] = useState<IGame[] | undefined>([]);
  const [createdView, setCreatedView] = useState<boolean>(true);

  useEffect(() => {
    // fetchGames();
  }, [view]);

  const fetchGames = async () => {
    const createResponse = await usersGames(deviceId);
    const likedResponse = await likedGames(deviceId);

    setMyCreatedGames(createResponse);
    setMyLikedGames(likedResponse);
  };

  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Text style={styles.headerText}>My Games</Text>
        <View style={styles.tabsContainer}>
          <Text style={styles.tabText}>Created</Text>
          <Text style={styles.tabText}>Liked</Text>
        </View>
      </View>

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
        data={createdView ? myCreatedGames : myLikedGames}
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
