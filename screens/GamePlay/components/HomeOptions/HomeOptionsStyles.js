import { StyleSheet } from "react-native";
import { verticalScale } from "../../../styles/Dimensions";

const styles = StyleSheet.create({
  buttonContainer: {
    height: "100%",
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "red",
  },

  buttonWrapper: {
    gap: verticalScale(30),
  },
});

export { styles };
