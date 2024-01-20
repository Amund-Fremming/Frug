import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  hostLobbyContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    width: "100%",
    gap: 20,
  },

  numberOfQuestionsDisplay: {
    position: "absolute",
    fontSize: 130,
    fontWeight: "600",
    opacity: 0.4,
    top: -230,
    fontFamily: "PressStart2P",
  },

  buttonContainer: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "center",
    gap: 30,
    bottom: 100,
  },

  text: {
    fontSize: 23,
    fontWeight: "bold",
    color: /*"#07BF7B"*/ "white",
    fontFamily: "PressStart2P",
  },

  gameIdDisplay: {
    width: 220,
    height: 60,
    margin: 0,
    top: 30,
    fontSize: 23,
    lineHeight: 27,
    fontWeight: "bold",
    color: /*"#07BF7B"*/ "white",
    fontFamily: "PressStart2P",
    textAlign: "center",
  },
});

export { styles };
