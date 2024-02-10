import { Image } from "react-native";
import { imageStyle } from "./MascotStyles";

export default function Mascot() {
  const mascot = require("../../assets/images/mascot.webp");

  return <Image source={mascot} style={imageStyle.mascot} />;
}
