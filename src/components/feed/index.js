import React from "react";
import { FlatList } from "react-native";
import Post from "../post";
import data from "../../data/stories";
import Stories from "../stories";

const Feed = () => {
  return (
    <FlatList
      keyExtractor={({ user: { id } }) => id}
      ListHeaderComponent={<Stories />}
      data={data}
      renderItem={(item) => <Post post={item} />}
    />
  );
};

export default Feed;
