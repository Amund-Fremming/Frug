import { StyleSheet } from "react-native";
import { verticalScale } from "../../../styles/Dimensions";

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: verticalScale(30),
    width: "100%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonWrapper: {
    gap: verticalScale(30),
    justifyContent: "center",
    alignItems: "center",
  },
});

export { styles };
