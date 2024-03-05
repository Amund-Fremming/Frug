import { Image } from "react-native";
import { imageStyle } from "./StegoMascotStyles";

export default function StegoMascot() {
  const mascot = require("../../assets/images/stego.webp");

  return <Image source={mascot} style={imageStyle.mascot} />;
}
