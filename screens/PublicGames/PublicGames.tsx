import React, { Dispatch, SetStateAction, useState, useEffect } from "react";
import {
  View,
  TextInput,
  Image,
  Pressable,
  FlatList,
  ScrollView,
} from "react-native";
import { styles, imageStyle } from "./PublicGamesStyles";

import { IGame } from "../../util/GameApiManager";
import { PublicGameCard } from "../../components/PublicGameCard/PublicGameCard";

interface PremadeProps {
  setGameId: Dispatch<SetStateAction<string>>;
  setView: Dispatch<SetStateAction<string>>;
  games: IGame[];
}

export default function Premade({ setGameId, setView, games }: PremadeProps) {
  const [searchString, setSearchString] = useState("");

  const searchIcon = require("../../assets/images/icons/searchIcon.png");
  const backIcon = require("../../assets/images/icons/backArrowIcon.png");

  useEffect(() => {
    // TODO
    // Get the device id
    // set the device id
  }, []);

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

        <FlatList
          style={{ width: "100%" }}
          contentContainerStyle={{
            paddingHorizontal: "5%",
            flexGrow: 1,
            justifyContent: "center",
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
            />
          )}
        />
      </View>
    </>
  );
}
