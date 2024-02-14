import React, { useState, useEffect, useRef } from "react";
import { View, FlatList, ActivityIndicator, Alert } from "react-native";
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

export default function PublicGames() {
  const { setView, setGameId, deviceId } = useGamePlayProvider();
  const isFocused = useIsFocused();

  const [games, setGames] = useState<IGame[] | undefined>([]);
  const [spinner, setSpinner] = useState(true);
  const [searchString, setSearchString] = useState("");

  const successfullFetchRef = useRef(false);
  const successfullSearchRef = useRef(true);
  const alertShown = useRef(false);
  const numTimeout = useRef(1);

  useEffect(() => {
    let intervalIdFetch;
    alertShown.current = false;
    numTimeout.current = 1;

    if (isFocused) {
      setSpinner(true);
      fetchGames();
    }

    intervalIdFetch = setInterval(() => {
      if (!successfullFetchRef.current) {
        fetchGames();
      }

      if (
        !alertShown.current &&
        numTimeout.current >= 2 &&
        !successfullFetchRef.current
      ) {
        Alert.alert(
          "Bad connection",
          "Please check your wifi connection, and try again."
        );

        alertShown.current = true;
      }

      if (!alertShown.current) {
        numTimeout.current = numTimeout.current + 1;
      }
    }, 3000);

    return () => {
      clearInterval(intervalIdFetch);
      setSpinner(false);
    };
  }, [isFocused]);

  const fetchGames = async () => {
    try {
      setSpinner(true);
      const fetchedGames: IGame[] | undefined = await getGamesSorted(deviceId);
      setGames(fetchedGames);
      setSpinner(false);
      successfullFetchRef.current = true;
    } catch (exception) {
      successfullFetchRef.current = false;
    }
  };

  // HANDLE TIMEOUT!
  const handleSearch = async () => {
    try {
      setSpinner(true);
      const searchResult = await searchForGames(searchString, deviceId);
      setSearchString("");
      setGames(searchResult);
      setSpinner(false);
      successfullSearchRef.current = true;
    } catch (error) {
      successfullSearchRef.current = false;
    }
  };

  if (spinner) {
    return (
      <>
        <SearchBar
          handleLeave={fetchGames}
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
        handleLeave={fetchGames}
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
