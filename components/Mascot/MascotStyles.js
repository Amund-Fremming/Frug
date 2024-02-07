import { StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "../../styles/Dimensions";

const imageStyle = StyleSheet.create({
  mascot: {
    width: horizontalScale(330),
    height: verticalScale(330),
  },
});

export { imageStyle };
