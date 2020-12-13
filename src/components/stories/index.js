import React from "react";
import { FlatList } from "react-native";
import UserStoryPreview from "../userStoryPreview";
import data from "../../data/stories";
import { styles } from "./styles";

const Stories = () => {
  return (
    <FlatList
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      horizontal
      data={data}
      keyExtractor={({ user: { id } }) => id}
      renderItem={({ item }) => (
        <UserStoryPreview
          imageUri={item.user.imageUri}
          name={item.user.name}
          userId={item.user.id}
        />
      )}
    />
  );
};

export default Stories;
