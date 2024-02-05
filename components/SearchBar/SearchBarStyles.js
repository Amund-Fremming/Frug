import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  searchBarContainer: {
    backgroundColor: "#604395",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
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

  input: {
    width: 270,
    height: 50,
    backgroundColor: "white",
    borderRadius: 8,
    paddingLeft: 20,
    fontSize: 16,
    fontFamily: "PressStart2P",
  },
});

const imageStyle = StyleSheet.create({
  searchIcon: {
    width: 40,
    height: 40,
    marginLeft: 2,
    marginRight: 4,
  },

  backIcon: {
    width: 45,
    height: 45,
  },
});

export { styles, imageStyle };
