import { StyleSheet } from "react-native";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../../../../styles/Dimensions";

const styles = StyleSheet.create({
  gameContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: horizontalScale(30),
  },

  questionAnimationContainer: {
    position: "absolute",
    height: horizontalScale(300),
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: horizontalScale(20),
  },

  text: {
    fontSize: moderateScale(16),
    color: "black",
    fontFamily: "PressStart2P",
    lineHeight: verticalScale(20),
  },

  questionAnimationTextbox: {
    position: "absolute",
    width: horizontalScale(340),
    minHeight: verticalScale(90),
    top: verticalScale(60),
    borderRadius: "30%",
    borderColor: "#000000",
    borderWidth: moderateScale(4),
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    padding: moderateScale(10),
    zIndex: 10,
  },

  questionAnimationDotOne: {
    position: "absolute",
    left: "56%",
    top: verticalScale(160),
    width: horizontalScale(20),
    height: verticalScale(20),
    borderRadius: 425,
    backgroundColor: "#ffffff",
    borderColor: "#000000",
    borderWidth: moderateScale(2.4),
  },

  questionAnimationDotTwo: {
    position: "absolute",
    top: verticalScale(200),
    left: "52%",
    width: horizontalScale(18),
    height: verticalScale(18),
    borderRadius: 425,
    backgroundColor: "#ffffff",
    borderColor: "#000000",
    borderWidth: horizontalScale(2.3),
  },

  questionAnimationDotThree: {
    position: "absolute",
    top: verticalScale(235),
    width: horizontalScale(15),
    height: verticalScale(15),
    borderRadius: 425,
    backgroundColor: "#ffffff",
    borderColor: "#000000",
    borderWidth: moderateScale(2.2),
    zIndex: 0,
  },
});

const imageStyle = StyleSheet.create({
  mascot: {
    width: horizontalScale(300),
    height: verticalScale(300),
    marginRight: horizontalScale(120),
  },
});

export { styles, imageStyle };
