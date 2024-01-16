import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  roverContainer: {
    width: 20,
    height: 100,
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
    fontSize: 26,
    fontWeight: "bold",
    color: /*"#07BF7B"*/ "white",
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
});

const imageStyles = StyleSheet.create({
  rover: {
    width: 100,
    height: 100,
    margin: 0,
    top: 20,
  },
});

export { styles, imageStyles };
