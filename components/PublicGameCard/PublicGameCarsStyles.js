import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#18181B",
    width: "100%",
    borderRadius: 20,
    padding: 20,
    flexDirection: "row",
    marginTop: 15,
    marginBottom: 15,
  },

  textSplit: {
    width: "70%",
    gap: 10,
    justifyContent: "center",
  },

  iconSplit: {
    width: "30%",
    justifyContent: "center",
    alignItems: "center",
  },

  headerText: {
    fontFamily: "PressStart2P",
    fontSize: 20,
    color: "#C4A58A",
  },

  subHeaderText: {
    fontFamily: "PressStart2P",
    fontSize: 16,
    color: "#59B199",
  },
});

const imageStyle = StyleSheet.create({
  niceIcon: {
    width: 100,
    height: 100,
  },
});

export { styles, imageStyle };
