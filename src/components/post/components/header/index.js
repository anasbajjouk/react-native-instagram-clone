import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ProfilePicture from "../../../profilePicture";
import { styles } from "./styles";

const Header = ({ imageUri, name }) => {
  return (
    <View style={styles.container}>
      <ProfilePicture uri={imageUri} size={40} />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

export default Header;
