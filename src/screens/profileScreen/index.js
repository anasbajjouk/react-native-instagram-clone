import React from "react";
import { Platform, StatusBar, Text, View } from "react-native";

function ProfileScreen() {
  return (
    <>
      <View
        style={{
          backgroundColor: "#8B0000",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          marginTop:
            Platform.OS === "android" ? StatusBar.currentHeight + 10 : 0,
        }}
      >
        <Text style={{ fontSize: 30, color: "white" }}>Profile Screen</Text>
      </View>
    </>
  );
}

export default ProfileScreen;
