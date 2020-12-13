import React from "react";
import { Platform, StatusBar, Text, View } from "react-native";

function NotificationScreen() {
  return (
    <>
      <View
        style={{
          backgroundColor: "#FF8C00",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          marginTop:
            Platform.OS === "android" ? StatusBar.currentHeight + 10 : 0,
        }}
      >
        <Text style={{ fontSize: 30, color: "white" }}>
          Notification Screen
        </Text>
      </View>
    </>
  );
}

export default NotificationScreen;
