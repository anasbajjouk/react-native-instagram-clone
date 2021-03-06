const { StyleSheet } = require("react-native");

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
  },
  right: {
    marginRight: 15,
  },
  name: {
    fontWeight: "bold",
    color: "#3c3c3c",
  },
});
