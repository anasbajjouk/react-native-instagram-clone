import React from "react";
import { Platform, StatusBar, Text, View } from "react-native";

function CreatePostScreen() {
  return (
    <>
      <View
        style={{
          backgroundColor: "#228B22",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          marginTop:
            Platform.OS === "android" ? StatusBar.currentHeight + 10 : 0,
        }}
      >
        <Text style={{ fontSize: 30, color: "white" }}>Post Screen</Text>
      </View>
    </>
  );
}

export default CreatePostScreen;
