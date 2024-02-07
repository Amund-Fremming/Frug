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
    fontSize: moderateScale(18),
    marginBottom: verticalScale(8),
    fontWeight: "bold",
    fontFamily: "PressStart2P",
  },

  tab: {
    paddingBottom: moderateScale(6),
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: moderateScale(4),
    width: "50%",
  },

  banner: {
    width: "100%",
    height: "100%",
    height: verticalScale(115),
    backgroundColor: "#604395",
    justifyContent: "flex-end",
    paddingTop: verticalScale(60),
    alignItems: "center",
  },
});

export { styles };
