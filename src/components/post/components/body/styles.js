const { StyleSheet, Dimensions } = require("react-native");

export const styles = StyleSheet.create({
  image: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").width,
  },
});
