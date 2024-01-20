import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
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
});

export { styles };
