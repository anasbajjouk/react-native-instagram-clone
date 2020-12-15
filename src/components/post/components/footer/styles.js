const { StyleSheet } = require("react-native");

export const styles = StyleSheet.create({
  container: { margin: 5 },
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
  },
  leftIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 120,
    alignItems: "center",
  },
  likes: {
    fontWeight: "bold",
  },
  caption: {
    margin: 3,
    color: "black",
  },
  postedTime: {
    color: "#8c8c8c",
  },
});
