import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Body from "./components/body";
import Footer from "./components/footer";
import Header from "./components/header";

const Post = ({ post }) => {
  const myStories = post.item.stories[0];
  
  return (
    <View>
      <Header imageUri={post.item.user.imageUri} name={post.item.user.name} />
      <Body imageUri={myStories.imageUri} />
      <Footer
        postedTime={myStories.postedTime}
        numberOfLikes={myStories.numberOfLikes}
      />
    </View>
  );
};

export default Post;
