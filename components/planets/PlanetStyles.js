import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  planetContainer: {
    position: "absolute",
    top: -320,
    width: "50%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  planetWrapperContainer: {
    height: 150,
    width: 150,
    justifyContent: "center",
    alignItems: "center",
  },
});

const imageStyle = StyleSheet.create({
  planetOne: {
    width: 120,
    height: 120,
    shadowColor: "#000",
    shadowOffset: {
      width: 6,
      height: 4,
    },
    shadowOpacity: 0.6,
    shadowRadius: 4.65,
  },

  planetTwo: {
    width: 100,
    height: 100,
    shadowColor: "#000",
    shadowOffset: {
      width: 6,
      height: 4,
    },
    shadowOpacity: 0.6,
    shadowRadius: 4.65,
  },

  planetThree: {
    width: 80,
    height: 80,
    shadowColor: "#000",
    shadowOffset: {
      width: 6,
      height: 4,
    },
    shadowOpacity: 0.6,
    shadowRadius: 4.65,
  },
});

export { styles, imageStyle };
