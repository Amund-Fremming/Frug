import { StyleSheet } from "react-native";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../../../../styles/Dimensions";

const styles = StyleSheet.create({
  hostLobbyContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: moderateScale(30),
  },

  numberOfQuestionsDisplay: {
    marginBottom: verticalScale(90),
    fontSize: moderateScale(130),
    fontWeight: "600",
    opacity: moderateScale(0.4),
    fontFamily: "PressStart2P",
  },

  buttonContainer: {
    marginTop: verticalScale(30),
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonWrapper: {
    justifyContent: "center",
    alignItems: "center",
    gap: moderateScale(30),
  },

  text: {
    fontSize: moderateScale(23),
    fontWeight: "bold",
    color: "white",
    fontFamily: "PressStart2P",
  },

  gameIdDisplay: {
    width: verticalScale(280),
    height: horizontalScale(40),
    top: moderateScale(30),
    fontSize: moderateScale(25),
    lineHeight: verticalScale(27),
    fontWeight: "bold",
    color: "white",
    fontFamily: "PressStart2P",
    textAlign: "center",
  },

  waitingText: {
    fontSize: moderateScale(35),
    fontWeight: "bold",
    fontFamily: "PressStart2P",
    color: "white",
  },

  waitingContainer: {
    gap: verticalScale(10),
    marginTop: verticalScale(30),
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: verticalScale(50),
  },
});

export { styles };
