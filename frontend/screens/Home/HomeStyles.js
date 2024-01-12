import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#342359",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  layerOneCircle: {
    width: 850,
    height: 800,
    top: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "3000%",
    backgroundColor: "#43367C",
  },

  layerTwoCircle: {
    width: 850,
    height: 800,
    top: 120,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "3000%",
    backgroundColor: "#604395",
  },

  layerThreeCircle: {
    width: 850,
    height: 800,
    top: 150,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "3000%",
    backgroundColor: "#A66444",
  },
});
