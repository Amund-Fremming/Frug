import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    borderColor: "red",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontSize: 26,
    fontWeight: "bold",
    color: /*"#07BF7B"*/ "white",
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
