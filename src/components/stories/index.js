import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Story from "../story";
import data from "../../data/stories";
import { styles } from "./styles";
import uuid from "react-native-uuid";

const Stories = () => {
  return (
    <FlatList
      key={uuid()}
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      horizontal
      data={data}
      keyExtractor={({ id }) => id}
      renderItem={({ item }) => (
        <Story
          imageUri={item.user.imageUri}
          name={item.user.name}
          key={uuid()}
        />
      )}
    />
  );
};

export default Stories;
