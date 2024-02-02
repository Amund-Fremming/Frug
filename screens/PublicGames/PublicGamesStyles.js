import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  viewContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "#0E0E10",
    alignItems: "center",
  },

  searchBarContainer: {
    backgroundColor: "#604395",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  input: {
    width: 270,
    height: 50,
    backgroundColor: "white",
    borderRadius: 8,
    paddingLeft: 20,
    fontSize: 16,
    fontFamily: "PressStart2P",
  },

  searchBarWrapper: {
    width: "100%",
    marginTop: 70,
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 25,
    display: "flex",
    flexDirection: "row",
  },
});

const imageStyle = StyleSheet.create({
  searchIcon: {
    width: 40,
    height: 40,
  },

  backIcon: {
    width: 40,
    height: 40,
  },
});

export { styles, imageStyle };
