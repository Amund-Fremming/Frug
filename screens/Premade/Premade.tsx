import React, { Dispatch, SetStateAction } from "react";
import { View, Text } from "react-native";

interface PremadeProps {
  setGameId: Dispatch<SetStateAction<string>>;
}

export default function Premade({ setGameId }: PremadeProps) {
  return (
    <>
      <View>
        <Text>Premade</Text>
      </View>
    </>
  );
}
