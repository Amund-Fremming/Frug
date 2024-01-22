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

  buttonContainer: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
    top: 40,
  },

  questionAnimationContainer: {
    position: "absolute",
    height: 300,
    width: "100%",
    top: -320,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },

  questionAnimationTextbox: {
    position: "absolute",
    top: 20,
    minWidth: 340,
    minHeight: 90,
    borderRadius: "30%",
    borderColor: "#000000",
    borderWidth: 4,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },

  text: {
    fontSize: 16,
    color: "black",
    fontFamily: "PressStart2P",
    lineHeight: 20,
  },

  questionAnimationDotOne: {
    position: "absolute",
    left: "56%",
    top: 145,
    width: 20,
    height: 20,
    borderRadius: 425,
    backgroundColor: "#ffffff",
    borderColor: "#000000",
    borderWidth: 2.4,
  },

  questionAnimationDotTwo: {
    position: "absolute",
    top: 190,
    left: "52%",
    width: 18,
    height: 18,
    borderRadius: 425,
    backgroundColor: "#ffffff",
    borderColor: "#000000",
    borderWidth: 2.3,
  },

  questionAnimationDotThree: {
    position: "absolute",
    top: 235,
    width: 15,
    height: 15,
    borderRadius: 425,
    backgroundColor: "#ffffff",
    borderColor: "#000000",
    borderWidth: 2.2,
  },
});

const imageStyle = StyleSheet.create({
  mascot: {
    width: 330,
    height: 330,
  },
});

export { styles, imageStyle };
