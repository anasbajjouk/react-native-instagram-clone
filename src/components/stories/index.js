import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Story from "../story";
import data from "../../data/stories";
import { styles } from "./styles";
import uuid from "react-native-uuid";

const Stories = () => {
  return (
    <FlatList
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      horizontal
      data={data}
      keyExtractor={({ name }) => name}
      renderItem={({ item }) => (
        <Story imageUri={item.user.imageUri} name={item.user.name} />
      )}
    />
  );
};

export default Stories;
