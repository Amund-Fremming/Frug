import { StyleSheet } from "react-native";
import { verticalScale, moderateScale } from "../../styles/Dimensions";

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    backgroundColor: "#0E0E10",
  },

  tabsContainer: {
    width: "100%",
    justifyContent: "space-around",
    flexDirection: "row",
  },

  tabText: {
    fontSize: moderateScale(14),
    marginBottom: verticalScale(8),
    fontWeight: "bold",
    color: "gray",
    fontFamily: "PressStart2P",
  },

  tabCreated: {
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: moderateScale(4),
    width: "50%",
  },

  tabLiked: {
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: moderateScale(4),
    width: "50%",
  },

  banner: {
    width: "100%",
    height: "100%",
    height: verticalScale(125),
    backgroundColor: "#604395",
    justifyContent: "flex-end",
    paddingTop: verticalScale(60),
    alignItems: "center",
  },

  headerText: {
    fontSize: moderateScale(23),
    marginBottom: verticalScale(20),
    fontWeight: "bold",
    color: "white",
    fontFamily: "PressStart2P",
  },
});

export { styles };
