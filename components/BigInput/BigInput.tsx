import React, { useState } from "react";
import { TextInput, Text } from "react-native";
import { styles } from "./BigInputStyles.js";

interface BigInputProps {
  value: string;
  placeholder: string;
  handleChange: (text: string) => void;
}

export default function BigInput({
  value,
  placeholder,
  handleChange,
}: BigInputProps) {
  return (
    <>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={(text: string) => handleChange(text)}
        style={styles.input}
      />
    </>
  );
}
