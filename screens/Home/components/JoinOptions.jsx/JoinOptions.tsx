import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import { Text, View, Image, Pressable, StyleSheet } from "react-native";

interface JoinProps {
  setView: Dispatch<SetStateAction<string>>;
}

export default function JoinOptions({ setView }: JoinProps) {
  return (
    <>
      <Text>Join</Text>
    </>
  );
}
