import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Post from "../post";
import data from "../../data/stories";
import uuid from "react-native-uuid";
import Stories from "../stories";

const Feed = () => {
  return (
    <FlatList
      keyExtractor={({ name }) => name}
      key={uuid()}
      ListHeaderComponent={<Stories key={uuid()} />}
      data={data}
      renderItem={(item) => <Post post={item} key={uuid()} />}
    />
  );
};

export default Feed;
