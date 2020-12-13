import { Dimensions, StatusBar, StyleSheet } from "react-native";

const DEVICE_HEIGHT = Dimensions.get("screen").height;
const STATUS_BAR = StatusBar.currentHeight;
const WINDOW_HEIGHT = Dimensions.get("window").height;
const navbarHeight = DEVICE_HEIGHT - WINDOW_HEIGHT + STATUS_BAR;

export const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "space-between",
  },
  userInfo: { alignItems: "center", flexDirection: "row" },
  userName: { color: "white", fontWeight: "700", fontSize: 15 },
  bottomContainer: {
    flexDirection: "row",
    marginBottom: Platform.OS === "android" && navbarHeight,
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 12,
  },
  textInput: {
    height: "100%",
    color: "white",
    fontSize: 16,
  },
  textInputContainer: {
    paddingHorizontal: 10,
    flex: 1,
    borderColor: "white",
    borderRadius: 50,
    borderWidth: 1,
    height: 40,
    marginHorizontal: 10,
  },
  cameraButton: {
    width: 40,
    height: 40,
    borderRadius: 100,
    borderColor: "white",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  sendButton: {
    // width: 50,
  },
  postedTime: {
    color: "#808080",
    fontSize: 14,
    fontWeight: "700",
    marginLeft: 10,
  },
  container: {
    height: "100%",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight + 10 : 0,
  },
});
