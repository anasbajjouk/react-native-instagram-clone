import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Feed from "../../components/feed";

function HomeScreen() {
  return (
    <>
      <SafeAreaView style={styles.appContainer}>
        <Feed />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    // marginTop: Platform.OS === "android" ? StatusBar.currentHeight + 10 : 0,
  },
});

export default HomeScreen;
