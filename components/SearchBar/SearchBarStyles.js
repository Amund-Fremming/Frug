import { StyleSheet } from "react-native";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../../screens/styles/Dimensions";

const styles = StyleSheet.create({
  searchBarContainer: {
    backgroundColor: "#604395",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  searchBarWrapper: {
    width: "100%",
    marginTop: verticalScale(60),
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: verticalScale(20),
    display: "flex",
    flexDirection: "row",
  },

  input: {
    width: horizontalScale(270),
    height: verticalScale(50),
    backgroundColor: "white",
    borderRadius: moderateScale(8),
    paddingLeft: verticalScale(20),
    fontSize: moderateScale(16),
    fontFamily: "PressStart2P",
  },
});

const imageStyle = StyleSheet.create({
  searchIcon: {
    width: horizontalScale(35),
    height: verticalScale(35),
    marginLeft: horizontalScale(2),
    marginRight: horizontalScale(4),
  },

  backIcon: {
    width: horizontalScale(35),
    height: verticalScale(35),
  },
});

export { styles, imageStyle };
