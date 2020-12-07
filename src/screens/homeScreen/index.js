import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Feed from "../../components/feed";
import Post from "../../components/post";
import Stories from "../../components/stories";
import data from "../../data/stories";

function HomeScreen() {
  return (
    <>
      <Feed />
    </>
  );
}

export default HomeScreen;
