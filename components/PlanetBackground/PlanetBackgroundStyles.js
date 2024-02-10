import { StyleSheet } from "react-native";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../styles/Dimensions";

const styles = StyleSheet.create({
  container: {
    zIndex: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "#342359",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },

  layerOneCircle: {
    width: horizontalScale(850),
    height: verticalScale(800),
    top: verticalScale(100),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "3000%",
    backgroundColor: "#43367C",
  },

  layerTwoCircle: {
    width: horizontalScale(850),
    height: verticalScale(800),
    top: verticalScale(120),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "3000%",
    backgroundColor: "#604395",
  },

  layerThreeCircle: {
    width: horizontalScale(850),
    height: verticalScale(800),
    top: verticalScale(150),
    paddingTop: verticalScale(100),
    justifyContent: "flex-start",
    alignItems: "center",
    borderRadius: "3000%",
    backgroundColor: "#8AA9C4",
    borderWidth: horizontalScale(4),
    borderColor: "black",
  },

  text: {
    fontSize: moderateScale(26),
    fontWeight: "bold",
    color: "white",
  },
});

const imageStyle = StyleSheet.create({
  loadingImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  starOne: {
    position: "absolute",
    width: horizontalScale(15),
    height: verticalScale(10),
    top: verticalScale(300),
    left: horizontalScale(30),
  },

  starTwo: {
    position: "absolute",
    width: horizontalScale(10),
    height: verticalScale(5),
    top: verticalScale(320),
    left: horizontalScale(45),
  },

  starThree: {
    position: "absolute",
    width: horizontalScale(12),
    height: verticalScale(8),
    top: verticalScale(340),
    left: horizontalScale(25),
  },

  starFour: {
    position: "absolute",
    width: horizontalScale(15),
    height: verticalScale(15),
    top: verticalScale(270),
    right: horizontalScale(30),
  },

  starFive: {
    position: "absolute",
    width: horizontalScale(15),
    height: verticalScale(10),
    top: verticalScale(320),
    right: horizontalScale(65),
  },

  starSix: {
    position: "absolute",
    width: horizontalScale(8),
    height: verticalScale(5),
    top: verticalScale(340),
    right: horizontalScale(35),
  },

  starSeven: {
    position: "absolute",
    width: horizontalScale(10),
    height: verticalScale(9),
    top: verticalScale(60),
    right: horizontalScale(30),
  },

  starEight: {
    position: "absolute",
    width: horizontalScale(11),
    height: verticalScale(8),
    top: verticalScale(75),
    right: horizontalScale(120),
  },

  starNine: {
    position: "absolute",
    width: horizontalScale(15),
    height: verticalScale(10),
    top: verticalScale(90),
    right: horizontalScale(80),
  },

  starTen: {
    position: "absolute",
    width: horizontalScale(12),
    height: verticalScale(8),
    top: verticalScale(120),
    left: horizontalScale(30),
  },

  starEleven: {
    position: "absolute",
    width: horizontalScale(9),
    height: verticalScale(9),
    top: verticalScale(145),
    left: horizontalScale(120),
  },

  starTwelve: {
    position: "absolute",
    width: horizontalScale(15),
    height: verticalScale(10),
    top: verticalScale(200),
    left: horizontalScale(80),
  },

  starThirteen: {
    position: "absolute",
    width: horizontalScale(15),
    height: verticalScale(10),
    top: verticalScale(70),
    left: horizontalScale(60),
  },

  starFourteen: {
    position: "absolute",
    width: horizontalScale(10),
    height: verticalScale(7),
    top: verticalScale(90),
    left: horizontalScale(120),
  },

  starFifteen: {
    position: "absolute",
    width: horizontalScale(10),
    height: verticalScale(5),
    top: verticalScale(100),
    left: horizontalScale(20),
  },

  starSixteen: {
    position: "absolute",
    width: horizontalScale(15),
    height: verticalScale(10),
    top: verticalScale(200),
    left: horizontalScale(150),
  },

  starSeventeen: {
    position: "absolute",
    width: horizontalScale(11),
    height: verticalScale(7),
    top: verticalScale(180),
    left: horizontalScale(250),
  },

  starEighteen: {
    position: "absolute",
    width: horizontalScale(8),
    height: verticalScale(10),
    top: verticalScale(210),
    left: horizontalScale(180),
  },
});

export { styles, imageStyle };
