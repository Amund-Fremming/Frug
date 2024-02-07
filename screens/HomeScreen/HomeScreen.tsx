import { View, Text, FlatList, Pressable } from "react-native";
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
  const [createdBorderColor, setCreatedBorderColor] =
    useState<string>("#FF6347");
  const [likedBorderColor, setLikedBorderColor] =
    useState<string>("transparent");
  const [createdTextColor, setCreatedTextColor] = useState<string>("white");
  const [likedTextColor, setLikedTextColor] = useState<string>("gray");

  useEffect(() => {
    // fetchGames();
  }, [view]);

  const fetchGames = async () => {
    const createResponse = await usersGames(deviceId);
    const likedResponse = await likedGames(deviceId);

    setMyCreatedGames(createResponse);
    setMyLikedGames(likedResponse);
  };

  const getTabStyles = (createdTab: boolean) => {
    if (createdTab)
      return { ...styles.tab, borderBottomColor: createdBorderColor };
    else return { ...styles.tab, borderBottomColor: likedBorderColor };
  };

  const getTabTextStyles = (createdTab: boolean) => {
    if (createdTab) return { ...styles.tabText, color: createdTextColor };
    else return { ...styles.tabText, color: likedTextColor };
  };

  const handleTabPressed = (createdTab: boolean) => {
    if (createdTab) {
      setLikedTextColor("gray");
      setCreatedTextColor("white");
      setLikedBorderColor("transparent");
      setCreatedBorderColor("#FF6347");
    } else {
      setLikedTextColor("white");
      setCreatedTextColor("gray");
      setLikedBorderColor("#FF6347");
      setCreatedBorderColor("transparent");
    }

    // Change games to the tab says!
  };

  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <View style={styles.tabsContainer}>
          <Pressable
            onPress={() => handleTabPressed(true)}
            style={getTabStyles(true)}
          >
            <Text style={getTabTextStyles(true)}>Created</Text>
          </Pressable>
          <Pressable
            onPress={() => handleTabPressed(false)}
            style={getTabStyles(false)}
          >
            <Text style={getTabTextStyles(false)}>Liked</Text>
          </Pressable>
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
