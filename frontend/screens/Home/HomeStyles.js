import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
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

  imageContainer: {
    width: "100%",
    position: "absolute",
    top: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  planetOne: {
    width: 150,
    height: 150,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  planetTwo: {
    width: 150,
    height: 150,
    marginBottom: 60,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  planetThree: {
    width: 150,
    height: 150,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  mascotContainer: {
    position: "absolute",
    top: 200,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

const imageStyle = StyleSheet.create({
  planetOne: {
    width: 110,
    height: 110,
  },

  planetTwo: {
    width: 100,
    height: 100,
  },

  planetThree: {
    width: 80,
    height: 80,
  },

  mascot: {
    width: 330,
    height: 330,
  },
});

export { styles, imageStyle };
