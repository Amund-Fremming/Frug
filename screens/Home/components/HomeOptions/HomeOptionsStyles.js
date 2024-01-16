import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  buttonContainer: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
  },

  text: {
    fontSize: 26,
    fontWeight: "bold",
    color: /*"#07BF7B"*/ "white",
  },

  button: {
    width: "35%",
    height: "22%",
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
});

export { styles };
