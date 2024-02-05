import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { View, Pressable, TextInput, Image } from "react-native";
import { styles, imageStyle } from "./SearchBarStyles";

interface SearchBarProps {
  handleLeave: () => void;
  handleSearch: () => void;
  searchString: string;
  setSearchString: Dispatch<SetStateAction<string>>;
}

export function SearchBar({
  handleLeave,
  handleSearch,
  searchString,
  setSearchString,
}: SearchBarProps) {
  const searchIcon = require("../../assets/images/icons/searchIcon.png");
  const backIcon = require("../../assets/images/icons/backArrowIcon.png");

  return (
    <View style={styles.searchBarContainer}>
      <View style={styles.searchBarWrapper}>
        <Pressable onPress={handleLeave}>
          <Image style={imageStyle.backIcon} source={backIcon} />
        </Pressable>
        <TextInput
          value={searchString}
          placeholder="Search Games"
          onChangeText={(text: string) => setSearchString(text.toUpperCase())}
          style={styles.input}
          onSubmitEditing={handleSearch}
        />
        <Pressable onPress={handleSearch}>
          <Image style={imageStyle.searchIcon} source={searchIcon} />
        </Pressable>
      </View>
    </View>
  );
}
