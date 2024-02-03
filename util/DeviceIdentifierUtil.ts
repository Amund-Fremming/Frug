import { Dispatch, SetStateAction } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { addDevice } from "./DeviceIdApiManager";

export const setDeviceIdentifier = async (
  setDeviceId: Dispatch<SetStateAction<string>>
) => {
  try {
    const jsonRaw = await AsyncStorage.getItem("devideIdentifier");

    if (jsonRaw != null) {
      const parsedData = JSON.parse(jsonRaw);
      setDeviceId(parsedData);
      return;
    }
  } catch (error) {
    throw new Error(`Error reading from AsyncStorage! ${error}`);
  }

  /* Device id does not exist, so we create one. */
  let randomDeviceId = "";
  let created = false;

  while (!created) {
    randomDeviceId = generateRandomString();
    created = await addDevice(randomDeviceId);
  }

  try {
    await AsyncStorage.setItem(
      "devideIdentifier",
      JSON.stringify(randomDeviceId)
    );

    setDeviceId(randomDeviceId);
  } catch (error) {
    throw new Error(`Error writing to AsyncStorage! ${error}`);
  }
};

function generateRandomString(): string {
  return Array.from(Array(25), () =>
    Math.floor(Math.random() * 36).toString(36)
  ).join("");
}
