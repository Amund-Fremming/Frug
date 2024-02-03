import React, { Dispatch, SetStateAction, useState } from "react";
import { View, TextInput, Image, Pressable, FlatList } from "react-native";
import { styles, imageStyle } from "./PublicGamesStyles";

import { IGame, searchForGames } from "../../util/GameApiManager";
import { PublicGameCard } from "../../components/PublicGameCard/PublicGameCard";

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
  setGames,
  games,
  deviceId,
}: PremadeProps) {
  const [searchString, setSearchString] = useState("");

  const searchIcon = require("../../assets/images/icons/searchIcon.png");
  const backIcon = require("../../assets/images/icons/backArrowIcon.png");

  const handleLeave = () => {
    setGameId("");
    setView("HOME");
  };

  const handleSearch = async () => {
    const searchResult = await searchForGames(searchString);
    setGames(searchResult);

    setSearchString("");
  };

  return (
    <>
      <View style={styles.viewContainer}>
        <View style={styles.searchBarContainer}>
          <View style={styles.searchBarWrapper}>
            <Pressable onPress={handleLeave}>
              <Image style={imageStyle.backIcon} source={backIcon} />
            </Pressable>
            <TextInput
              value={searchString}
              placeholder="Search Games"
              onChangeText={(text: string) =>
                setSearchString(text.toUpperCase())
              }
              style={styles.input}
            />
            <Pressable onPress={handleSearch}>
              <Image style={imageStyle.searchIcon} source={searchIcon} />
            </Pressable>
          </View>
        </View>

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
