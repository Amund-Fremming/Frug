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
    gap: verticalScale(30),
    justifyContent: "center",
    alignItems: "center",
  },

  headerView: {
    borderBottomColor: "black",
    borderBottomWidth: verticalScale(5),
    paddingBottom: moderateScale(5),
  },

  header: {
    color: "black",
    fontWeight: "bold",
    fontFamily: "PressStart2P",
    fontSize: moderateScale(30),
    width: "95%",
  },

  text: {
    color: "#FF6347",
    fontFamily: "PressStart2P",
    fontSize: moderateScale(18),
  },

  subText: {
    color: "white",
    fontFamily: "PressStart2P",
    fontSize: moderateScale(14),
    marginLeft: horizontalScale(30),
    lineHeight: moderateScale(15),
  },

  indentedWrapper: {
    fontFamily: "PressStart2P",
    gap: verticalScale(10),
    width: "95%",
    marginLeft: horizontalScale(30),
    marginBottom: verticalScale(30),
  },
});

export { styles };
