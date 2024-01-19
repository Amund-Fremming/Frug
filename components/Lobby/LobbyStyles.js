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

  hostLobbyLeaveAndStart: {
    justifyContent: "center",
    alignItems: "center",
    width: "16%",
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

  hostText: {
    fontSize: 18,
    fontWeight: "bold",
    color: /*"#07BF7B"*/ "white",
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

  inputContainer: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "center",
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

  backButton: {
    width: "25%",
    height: 60,
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

  input: {
    width: "35%",
    height: 70,
    backgroundColor: "#ffffff",
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
    padding: 15,
    fontSize: 22,
  },

  text: {
    fontSize: 23,
    fontWeight: "bold",
    color: /*"#07BF7B"*/ "white",
    fontFamily: "PressStart2P",
  },

  input: {
    width: "35%",
    height: 70,
    backgroundColor: "#ffffff",
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
    padding: 15,
    fontSize: 22,
  },

  gameIdDisplay: {
    width: 220,
    height: 100,
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

const imageStyles = StyleSheet.create({
  rover: {
    width: 125,
    height: 100,
    margin: 0,
    top: 10,
  },
});

export { styles, imageStyles };
