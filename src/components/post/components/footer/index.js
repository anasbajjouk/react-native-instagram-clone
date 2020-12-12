import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const Footer = ({ postedTime, numberOfLikes }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);

  const onLikePressed = () => {
    const amount = isLiked ? -1 : 1;
    setLikesCount(likesCount + amount);
    setIsLiked(!isLiked);
  };

  useEffect(() => {
    setLikesCount(numberOfLikes);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.iconsContainer}>
        <View style={styles.leftIcons}>
          <TouchableOpacity onPress={onLikePressed}>
            {isLiked ? (
              <FontAwesome name="heart" size={25} color={"#c30000"} />
            ) : (
              <FontAwesome name="heart-o" size={25} color={"#545454"} />
            )}
          </TouchableOpacity>

          <FontAwesome name="comment-o" size={25} color={"#545454"} />
          <FontAwesome name="send-o" size={23} color={"#545454"} />
        </View>

        <FontAwesome name="bookmark-o" size={25} color={"#545454"} />
      </View>

      <Text style={styles.likes}>
        {likesCount} {likesCount > 1 ? "Likes" : "Like"}
      </Text>
      <Text style={styles.postedTime}>{postedTime}</Text>
    </View>
  );
};

export default Footer;
