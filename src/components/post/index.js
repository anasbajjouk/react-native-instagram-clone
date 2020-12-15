import React from "react";
import { View } from "react-native";
import Body from "./components/body";
import Footer from "./components/footer";
import Header from "./components/header";

const Post = ({ post }) => {
  return (
    <View>
      <Header imageUri={post?.user?.image} name={post?.user?.name} />
      <Body imageUri={post?.image} />
      <Footer
        numberOfLikes={post?.likes}
        postedTime={post?.createdAt}
        caption={post?.caption}
      />
    </View>
  );
};

export default Post;
