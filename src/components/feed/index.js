import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { API, graphqlOperation } from "aws-amplify";
import Post from "../post";
import Stories from "../stories";
import { listPosts } from "../../../graphql/queries";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const postsData = await API.graphql(graphqlOperation(listPosts));
      setPosts(postsData.data.listPosts.items);
    } catch (err) {
      console.error("CUSTOM ERROR:", err.message);
    }
  };

  return (
    <FlatList
      keyExtractor={({ id }) => id}
      ListHeaderComponent={<Stories />}
      data={posts}
      renderItem={({ item }) => <Post post={item} />}
    />
  );
};

export default Feed;
