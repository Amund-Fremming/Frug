import { StyleSheet } from "react-native";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../../../../styles/Dimensions";

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#604395",
    justifyContent: "center",
    alignItems: "center",
  },

  wrapper: {
    gap: verticalScale(20),
    justifyContent: "center",
    alignItems: "center",
  },

  header: {
    color: "white",
    fontFamily: "PressStart2P",
    fontSize: moderateScale(28),
  },

  text: {
    color: "#FF6347",
    fontFamily: "PressStart2P",
    fontSize: moderateScale(16),
  },

  subText: {
    color: "white",
    fontFamily: "PressStart2P",
    fontSize: moderateScale(12),
    marginLeft: horizontalScale(30),
    lineHeight: 15,
  },

  indentedWrapper: {
    fontFamily: "PressStart2P",
    gap: verticalScale(10),
    width: "80%",
    marginLeft: horizontalScale(30),
  },
});

export { styles };
