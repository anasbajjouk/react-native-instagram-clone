// import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import HomeScreen from "./src/screens/homeScreen";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <HomeScreen />
      {/* <StatusBar barStyle="dark-content" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
