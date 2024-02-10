import { StyleSheet } from "react-native";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../../styles/Dimensions";

const styles = StyleSheet.create({
  button: {
    width: horizontalScale(220),
    height: verticalScale(70),
    backgroundColor: "#C4A58A",
    display: "flex",
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
    borderWidth: horizontalScale(3),
  },

  text: {
    fontSize: moderateScale(23),
    fontWeight: "bold",
    color: /*"#07BF7B"*/ "black",
    fontFamily: "PressStart2P",
  },
});

export { styles };
