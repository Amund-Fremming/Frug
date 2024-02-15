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
    gap: verticalScale(40),
    justifyContent: "center",
    alignItems: "center",
  },

  headerView: {
    borderBottomColor: "black",
    borderBottomWidth: verticalScale(5),
    padding: moderateScale(5),
  },

  header: {
    color: "black",
    fontFamily: "PressStart2P",
    fontSize: moderateScale(30),
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
