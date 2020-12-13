import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import ProfilePicture from "../profilePicture";
import { styles } from "./styles";

const UserStoryPreview = ({ userId, imageUri, name }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("Story", { userId });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <ProfilePicture uri={imageUri} />
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
};

export default UserStoryPreview;
