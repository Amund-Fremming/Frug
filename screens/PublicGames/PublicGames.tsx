import React, { useState, useEffect, useRef } from "react";
import { View, FlatList, ActivityIndicator } from "react-native";
import { styles } from "./PublicGamesStyles";
import { useIsFocused } from "@react-navigation/native";

import {
  IGame,
  searchForGames,
  getGamesSorted,
} from "../../util/GameApiManager";
import { PublicGameCard } from "../../components/PublicGameCard/PublicGameCard";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { useGamePlayProvider } from "../../providers/GamePlayProvider";
import { getConfigFilePaths } from "expo/config";

export default function PublicGames() {
  const { setView, setGameId, deviceId } = useGamePlayProvider();
  const isFocused = useIsFocused();

  const [games, setGames] = useState<IGame[] | undefined>([]);
  const [spinner, setSpinner] = useState(true);
  const [searchString, setSearchString] = useState("");

  const successfullFetchRef = useRef(false);

  useEffect(() => {
    let intervalId;

    if (isFocused) {
      setSpinner(true);
      fetchGames();
    }

    intervalId = setInterval(() => {
      if (!successfullFetchRef.current) {
        setSpinner(true);
        fetchGames();
      }
    }, 3000);

    return () => {
      clearInterval(intervalId);
      setSpinner(false);
    };
  }, [isFocused]);

  const fetchGames = async () => {
    try {
      const fetchedGames: IGame[] | undefined = await getGamesSorted(deviceId);
      setGames(fetchedGames);
      setSpinner(false);

      successfullFetchRef.current = true;
    } catch (exception) {
      successfullFetchRef.current = false;
    }
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
  );
}
