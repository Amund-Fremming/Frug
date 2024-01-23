import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: 130,
    height: 70,
    backgroundColor: "#C4A58A",
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

  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: /*"#07BF7B"*/ "black",
    fontFamily: "PressStart2P",
  },
});

export { styles };
