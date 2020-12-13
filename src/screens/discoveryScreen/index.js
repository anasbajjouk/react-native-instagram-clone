import React from "react";
import { Platform, StatusBar, Text, View } from "react-native";

function DiscoveryScreen() {
  return (
    <View
      style={{
        backgroundColor: "#4682B4",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight + 10 : 0,
      }}
    >
      <Text style={{ fontSize: 30, color: "white" }}>Discovery Screen</Text>
    </View>
  );
}

export default DiscoveryScreen;
