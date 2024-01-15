import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import { Text, View, Image, Pressable, StyleSheet } from "react-native";

interface HostProps {
  setView: Dispatch<SetStateAction<string>>;
}

export default function HostOptions({ setView }: HostProps) {
  return (
    <>
      <Text>Host</Text>
    </>
  );
}
