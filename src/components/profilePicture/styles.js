const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderWidth: 2,
    borderColor:
      "linear-gradient(31deg, rgba(194,81,255,1) 0%, rgba(95,20,126,1) 41%, rgba(131,15,159,1) 68%, rgba(235,0,255,1) 100%)",
  },
  image: {
    borderWidth: 1,
  },
});

export default styles;
