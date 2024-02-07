import { StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "../../styles/Dimensions";

const imageStyle = StyleSheet.create({
  mascot: {
    width: horizontalScale(300),
    height: verticalScale(300),
  },
});

export { imageStyle };
