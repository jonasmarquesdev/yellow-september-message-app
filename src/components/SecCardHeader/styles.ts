import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  Img: {
    width: 300,
    height: 120,
    borderRadius: 64,
    borderColor: '#fff',
    borderWidth: 4
  },
  Text: {
    position: "absolute",
    color: "#ffd401",
    fontWeight: "900",
    fontSize: 18,
    left: 40,
    top: 30,
    width: "30%",
    textShadowColor: '#000000bf', // 0, 0, 0, 0.75
    textShadowOffset: { width: 0.5, height: 0.5 }, textShadowRadius: 1,
  },
});
