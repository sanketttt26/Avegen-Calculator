import { StyleSheet, Dimensions } from "react-native";
import { myColors } from "./Colors";

// Get the screen width to dynamically adjust font size
const { width } = Dimensions.get("window");

export const Styles = StyleSheet.create({
  btnBlue: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: myColors.blue,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
  btnGray: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: myColors.btnGray,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
  btnLight: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: myColors.white,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
  btnGreen: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: myColors.result,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
  smallTextLight: {
    fontSize: 32,
    color: myColors.white,
  },
  smallTextDark: {
    fontSize: 32,
    color: myColors.black,
  },
  screenFirstNumber: {
    fontSize: width > 360 ? 96 : 72, // Shrink font size if screen is smaller
    color: myColors.gray,
    alignSelf: "flex-end",
    flexWrap: "wrap", // Allow text to wrap if it's too long
  },
  screenSecondNumber: {
    fontSize: width > 360 ? 40 : 32, // Adjust font size for smaller screens
    color: myColors.gray,
    alignSelf: "flex-end",
  },
  row: {
    maxWidth: "100%",
    flexDirection: "row",
  },
  viewBottom: {
    position: "absolute",
    bottom: 50,
  },
});
