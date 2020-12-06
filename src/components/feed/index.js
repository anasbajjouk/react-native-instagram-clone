import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Post from "../post";
import { data } from "../../data/stories";
const Feed = () => {
  return (
    <FlatList data={data} renderItem={(item) => <Post post={item} />} />

  );
};

export default Feed;
