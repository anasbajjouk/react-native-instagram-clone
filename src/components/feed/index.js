import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Post from "../post";
import data from "../../data/stories";
import uuid from "react-native-uuid";
import Stories from "../stories";

const Feed = () => {
  return (
    <FlatList
      ListHeaderComponent={<Stories />}
      data={data}
      renderItem={(item) => <Post post={item} key={uuid()} />}
    />
  );
};

export default Feed;
