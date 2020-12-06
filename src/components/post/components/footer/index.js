import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { styles } from "./styles";

const Footer = ({ postedTime }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.likes}>1234 Likes</Text>
      <Text style={styles.postedTime}>{postedTime}</Text>
    </View>
  );
};

export default Footer;
