import { StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "../../../styles/Dimensions";

const styles = StyleSheet.create({
  buttonContainer: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonWrapper: {
    gap: verticalScale(30),
    top: verticalScale(20),
    justifyContent: "center",
    alignItems: "center",
  },
});

export { styles };
