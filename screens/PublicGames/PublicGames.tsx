import React, { useState, useEffect } from "react";
import { View, FlatList, ActivityIndicator } from "react-native";
import { styles } from "./PublicGamesStyles";

import {
  IGame,
  searchForGames,
  getGamesSorted,
} from "../../util/GameApiManager";
import { PublicGameCard } from "../../components/PublicGameCard/PublicGameCard";
import { SearchBar } from "../../components/SearchBar/SearchBar";

import { useGamePlayProvider } from "../../providers/GamePlayProvider";

export default function PublicGames() {
  const { view, setView, gameId, setGameId, deviceId, setDeviceId } =
    useGamePlayProvider();

  const [games, setGames] = useState<IGame[]>([]);
  const [spinner, setSpinner] = useState(false);
  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    setSpinner(true);
    fetchGames();
  }, []);

  const fetchGames = async () => {
    const fetchedGames: IGame[] | undefined = await getGamesSorted(deviceId);
    if (fetchedGames) setGames(fetchedGames);
    setSpinner(false);
  };

  const handleLeave = async () => {
    setSpinner(true);
    const searchResult = await getGamesSorted(deviceId);
    setGames(searchResult);
    setSpinner(false);
  };

  const handleSearch = async () => {
    setSpinner(true);
    setSearchString("");

    const searchResult = await searchForGames(searchString, deviceId);
    setGames(searchResult);
    setSpinner(false);
  };

  if (spinner) {
    return (
      <>
        <SearchBar
          handleLeave={handleLeave}
          handleSearch={handleSearch}
          searchString={searchString}
          setSearchString={setSearchString}
        />
        <View style={styles.spinnerStyles}>
          <ActivityIndicator size="large" color="#604395" />
        </View>
      </>
    );
  }

  return (
    <>
      <View style={styles.viewContainer}>
        <SearchBar
          handleLeave={handleLeave}
          handleSearch={handleSearch}
          searchString={searchString}
          setSearchString={setSearchString}
        />
        <FlatList
          style={{ width: "100%", marginBottom: 70 }}
          contentContainerStyle={{
            paddingHorizontal: "5%",
            flexGrow: 1,
            marginTop: 15,
            paddingBottom: 30,
          }}
          data={games}
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
    </>
  );
}
