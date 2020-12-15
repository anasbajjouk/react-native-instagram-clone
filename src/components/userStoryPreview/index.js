import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity } from "react-native";
import ProfilePicture from "../profilePicture";
import { styles } from "./styles";

const UserStoryPreview = (story) => {
  const {
    story: {
      user: { id, image, name },
    },
  } = story;

  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("Story", { userId: id });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <ProfilePicture uri={image} />
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
};

export default UserStoryPreview;
