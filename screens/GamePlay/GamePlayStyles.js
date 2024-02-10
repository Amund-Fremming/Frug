import { StyleSheet } from "react-native";
import { moderateScale } from "../../styles/Dimensions";

const styles = StyleSheet.create({
  text: {
    fontSize: moderateScale(26),
    fontWeight: "bold",
    color: "white",
  },
});

const imageStyle = StyleSheet.create({
  loadingImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
});

export { styles, imageStyle };
