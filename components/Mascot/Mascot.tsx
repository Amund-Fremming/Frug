import { View, Image } from "react-native";
import { styles, imageStyle } from "./MascotStyles";

export default function Mascot() {
  const mascot = require("../../assets/images/mascot.webp");

  return (
    <View style={styles.mascotContainer}>
      <Image source={mascot} style={imageStyle.mascot} />
    </View>
  );
}
