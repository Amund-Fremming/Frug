import { StyleSheet } from "react-native";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../../screens/styles/Dimensions";

const styles = StyleSheet.create({
  mascotContainer: {
    position: "absolute",
    top: moderateScale(180),
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

const imageStyle = StyleSheet.create({
  mascot: {
    width: horizontalScale(330),
    height: verticalScale(330),
  },
});

export { styles, imageStyle };
