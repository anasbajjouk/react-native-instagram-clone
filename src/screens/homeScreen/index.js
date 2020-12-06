import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Post from "../../components/post";
import Stories from "../../components/stories";
import data from "../../data/stories";

function HomeScreen() {
  return (
    <View>
      <Stories />
      <Feed />
    </View>
  );
}

export default HomeScreen;
