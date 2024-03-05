import { StyleSheet } from "react-native";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../../styles/Dimensions";

const styles = StyleSheet.create({
  planetContainer: {
    position: "absolute",
    top: verticalScale(60),
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  planetWrapperContainer: {
    height: verticalScale(150),
    width: horizontalScale(150),
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: moderateScale(6),
      height: moderateScale(4),
    },
    shadowOpacity: moderateScale(0.8),
    shadowRadius: moderateScale(4.65),
  },
});

const imageStyle = StyleSheet.create({
  planetOne: {
    width: horizontalScale(110),
    height: verticalScale(110),
  },

  planetTwo: {
    width: horizontalScale(110),
    height: verticalScale(110),
  },

  planetThree: {
    width: horizontalScale(85),
    height: verticalScale(85),
  },
});

export { styles, imageStyle };
