import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Body from "./components/body";
import Footer from "./components/footer";
import Header from "./components/header";

const Post = ({ post }) => {
  console.log(post.stories[0].imageUri);
  return (
    <View>
      <Header imageUri={post.user.imageUri} name={post.user.name} />
      <Body imageUri={post.stories[0].imageUri} />
      <Footer postedTime={post.stories[0].postedTime} />
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({});
