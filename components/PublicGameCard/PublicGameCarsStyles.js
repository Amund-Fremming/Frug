import { StyleSheet } from "react-native";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../../screens/styles/Dimensions";

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#18181B",
    width: "100%",
    borderRadius: moderateScale(20),
    padding: moderateScale(20),
    flexDirection: "row",
    marginTop: verticalScale(15),
    marginBottom: horizontalScale(15),
  },

  voteContainer: {
    flexDirection: "row",
    gap: horizontalScale(20),
    alignItems: "center",
  },

  textSplit: {
    width: "80%",
    gap: horizontalScale(13),
    justifyContent: "center",
  },

  iconSplit: {
    width: "20%",
    justifyContent: "center",
    alignItems: "center",
  },

  headerText: {
    fontFamily: "PressStart2P",
    fontSize: moderateScale(18),
    color: "#C4A58A",
  },

  subHeaderText: {
    fontFamily: "PressStart2P",
    fontSize: moderateScale(15),
    color: "#C4A58A",
  },

  procentileText: {
    fontFamily: "PressStart2P",
    fontSize: moderateScale(20),
    color: "#05F4C9",
    marginLeft: horizontalScale(40),
  },
});

const imageStyle = StyleSheet.create({
  niceIcon: {
    width: horizontalScale(100),
    height: verticalScale(100),
  },
});

export { styles, imageStyle };
