import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Body from "./components/body";
import Footer from "./components/footer";
import Header from "./components/header";

const Post = ({ post }) => {

  return (
    <View>
      <Header imageUri={post.item.user.imageUri} name={post.item.user.name} />
      <Body imageUri={post.item.stories[0].imageUri} />
      <Footer postedTime={post.item.stories[0].postedTime} />
    </View>
  );
};

export default Post;
