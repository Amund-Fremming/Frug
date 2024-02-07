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
    borderColor: "red",
    borderWidth: 2,
    flexDirection: "row",
  },

  tabText: {
    fontSize: moderateScale(14),
    fontWeight: "bold",
    color: "gray",
    fontFamily: "PressStart2P",
  },

  banner: {
    width: "100%",
    height: "100%",
    height: verticalScale(150),
    backgroundColor: "#604395",
    justifyContent: "flex-start",
    paddingTop: verticalScale(60),
    alignItems: "center",
  },

  headerText: {
    fontSize: moderateScale(23),
    fontWeight: "bold",
    color: "white",
    fontFamily: "PressStart2P",
  },
});

export { styles };
