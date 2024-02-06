import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  hostLobbyContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
  },

  numberOfQuestionsDisplay: {
    fontSize: 130,
    fontWeight: "600",
    opacity: 0.4,
    fontFamily: "PressStart2P",
  },

  buttonContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonWrapper: {
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
  },

  text: {
    fontSize: 23,
    fontWeight: "bold",
    color: "white",
    fontFamily: "PressStart2P",
  },

  gameIdDisplay: {
    width: 220,
    height: 60,
    top: 30,
    fontSize: 25,
    lineHeight: 27,
    fontWeight: "bold",
    color: "white",
    fontFamily: "PressStart2P",
    textAlign: "center",
  },
});

export { styles };
