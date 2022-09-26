import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  titles: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    width: "90%",
    borderRadius: 16,
    paddingBottom: 10,
  },
  primaryTitle: {
    fontWeight: "900",
    fontSize: 90,
  },
  subTitle: {
    color: "#e05821",
    position: "absolute",
    fontWeight: "500",
    fontSize: 27,
    left: 60,
    top: 12,
  },
  footerTitle: {
    position: "absolute",
    fontSize: 18,
    right: 100,
    top: 100,
    fontWeight: "700",
    fontStyle: "italic",
  },
  logo: {
    position: "absolute",
    width: 90,
    height: 90,
    left: 235,
    top: 30,
  },
});