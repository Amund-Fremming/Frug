import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  planetContainer: {
    position: "absolute",
    top: 70,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  planetWrapperContainer: {
    height: 150,
    width: 150,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 6,
      height: 4,
    },
    shadowOpacity: 0.8,
    shadowRadius: 4.65,
  },
});

const imageStyle = StyleSheet.create({
  planetOne: {
    width: 120,
    height: 120,
  },

  planetTwo: {
    width: 100,
    height: 100,
  },

  planetThree: {
    width: 80,
    height: 80,
  },
});

export { styles, imageStyle };
