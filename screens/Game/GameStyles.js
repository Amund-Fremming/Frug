import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  gameContainer: {
    top: 20,
    width: "100%",
    gap: 30,
  },

  mascotContainer: {
    position: "absolute",
    top: -160,
    left: 170,
    width: "100%",
  },

  button: {
    width: "35%",
    height: 70,
    backgroundColor: "#808080",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000000",
    shadowOffset: {
      width: 7,
      height: 8,
    },
    shadowOpacity: 1,
    shadowRadius: 0,
    borderRadius: 10,
    borderWidth: 3,
  },

  buttonContainer: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
    top: 40,
  },

  text: {
    fontSize: 23,
    fontWeight: "bold",
    color: /*"#07BF7B"*/ "white",
    fontFamily: "PressStart2P",
  },
});

const imageStyle = StyleSheet.create({
  mascot: {
    width: 330,
    height: 330,
  },
});

export { styles, imageStyle };
