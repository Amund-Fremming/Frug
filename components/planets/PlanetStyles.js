import { StyleSheet } from "react-native";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../../screens/styles/Dimensions";

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
    width: horizontalScale(120),
    height: verticalScale(120),
  },

  planetTwo: {
    width: horizontalScale(100),
    height: verticalScale(100),
  },

  planetThree: {
    width: horizontalScale(80),
    height: verticalScale(80),
  },
});

export { styles, imageStyle };
