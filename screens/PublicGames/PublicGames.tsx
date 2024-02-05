import React, { Dispatch, SetStateAction, useState, useEffect } from "react";
import {
  View,
  TextInput,
  Image,
  Pressable,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { styles } from "./PublicGamesStyles";

import {
  IGame,
  searchForGames,
  getGamesSorted,
} from "../../util/GameApiManager";
import { PublicGameCard } from "../../components/PublicGameCard/PublicGameCard";
import { SearchBar } from "../../components/SearchBar/SearchBar";

interface PremadeProps {
  setGameId: Dispatch<SetStateAction<string>>;
  setView: Dispatch<SetStateAction<string>>;
  setGames: Dispatch<SetStateAction<IGame[]>>;
  games: IGame[];
  deviceId: string;
}

export default function Premade({
  setGameId,
  setView,

  deviceId,
}: PremadeProps) {
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

  const handleLeave = () => {
    setGameId("");
    setView("HOME");
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
          style={{ width: "100%" }}
          contentContainerStyle={{
            paddingHorizontal: "5%",
            flexGrow: 1,
            marginTop: 15,
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
