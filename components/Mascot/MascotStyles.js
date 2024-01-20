import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mascotContainer: {
    position: "absolute",
    top: -200,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

const imageStyle = StyleSheet.create({
  mascot: {
    width: 330,
    height: 330,
  },
});

export { styles, imageStyle };
