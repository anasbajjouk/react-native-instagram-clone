import React from "react";
import { Text, View } from "react-native";
import ProfilePicture from "../../../profilePicture";
import { styles } from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Header = ({ imageUri, name }) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <ProfilePicture uri={imageUri} size={40} />
        <Text style={styles.name}>{name}</Text>
      </View>

      <View style={styles.right}>
        <MaterialCommunityIcons name="dots-vertical" size={18} color="black" />
      </View>
    </View>
  );
};

export default Header;
