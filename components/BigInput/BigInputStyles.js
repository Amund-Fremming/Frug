import { StyleSheet } from "react-native";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../../styles/Dimensions";

const styles = StyleSheet.create({
  input: {
    width: horizontalScale(300),
    height: verticalScale(70),
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000000",
    shadowOffset: {
      width: horizontalScale(7),
      height: verticalScale(8),
    },
    shadowOpacity: moderateScale(1),
    shadowRadius: moderateScale(0),
    borderRadius: moderateScale(10),
    borderWidth: moderateScale(3),
    padding: moderateScale(15),
    fontSize: moderateScale(22),
  },

  text: {
    fontSize: moderateScale(23),
    fontWeight: "bold",
    color: "white",
    fontFamily: "PressStart2P",
  },
});

export { styles };
