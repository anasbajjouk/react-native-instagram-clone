import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { API, graphqlOperation } from "aws-amplify";
import UserStoryPreview from "../userStoryPreview";
import { styles } from "./styles";
import { listStorys } from "../../../graphql/queries";

const Stories = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetchStories();
  }, []);

  const fetchStories = async () => {
    try {
      const storiesData = await API.graphql(graphqlOperation(listStorys));
      setStories(storiesData.data.listStorys.items);
    } catch (err) {
      console.error("CUSTOM ERROR:", err.message);
    }
  };

  return (
    <FlatList
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      horizontal
      data={stories}
      keyExtractor={({ id }) => id}
      renderItem={({ item }) => <UserStoryPreview story={item} />}
    />
  );
};

export default Stories;
