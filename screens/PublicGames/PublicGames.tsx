import React, { Dispatch, SetStateAction, useState, useEffect } from "react";
import { View, TextInput, Image, Pressable, Text } from "react-native";
import { styles, imageStyle } from "./PublicGamesStyles";

import { Game, getGamesSorted } from "../../util/GameApiManager";
import { PublicGameCard } from "../../components/PublicGameCard/PublicGameCard";

interface PremadeProps {
  setGameId: Dispatch<SetStateAction<string>>;
  setView: Dispatch<SetStateAction<string>>;
}

export default function Premade({ setGameId, setView }: PremadeProps) {
  const [searchString, setSearchString] = useState("");
  const [games, setGames] = useState<Game[]>([]);

  const searchIcon = require("../../assets/images/icons/searchIcon.png");
  const backIcon = require("../../assets/images/icons/backArrowIcon.png");

  useEffect(() => {
    fetchGames();

    // TODO
    // Get the device id
    // set the device id
  }, []);

  const fetchGames = async () => {
    const fetchedGames: Game[] | undefined = await getGamesSorted();
    if (fetchedGames) setGames(fetchedGames);
  };

  // TODO - implement a back button
  const handleLeave = () => {
    setGameId("");
    setView("HOME");
  };

  const handleSearch = () => {
    // TODO
    // Get searchstring
    // use Api manager to send request
    // set the games result to games state

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

        {games.map((game: Game) => (
          <PublicGameCard
            key={game.gameId}
            game={game}
            setView={setView}
            setGameId={setGameId}
          />
        ))}
      </View>
    </>
  );
}
