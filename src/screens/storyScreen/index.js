import React, { useState, useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { API, graphqlOperation } from "aws-amplify";
import {
  View,
  Text,
  ImageBackground,
  ActivityIndicator,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
import ProfilePicture from "../../components/profilePicture";
import { listStorys } from "../../../graphql/queries";
import { styles } from "./styles";

const StoryScreen = () => {
  const route = useRoute();
  // const navigation = useNavigation();

  const [stories, setStories] = useState([]);
  const [activeStoryIndex, setActiveStoryIndex] = useState(null);

  const userId = route.params.userId;

  useEffect(() => {
    fetchStories();

    setActiveStoryIndex(0);
  }, []);

  const fetchStories = async () => {
    try {
      const storiesData = await API.graphql(graphqlOperation(listStorys));
      setStories(storiesData.data.listStorys.items);
    } catch (err) {
      console.error("CUSTOM ERROR:", err.message);
    }
  };

  const activeStory = stories[activeStoryIndex];

  const handleNextStory = () => {
    if (activeStoryIndex >= stories.length - 1) {
      // navigateToNextUser();
      return;
    }
    setActiveStoryIndex(activeStoryIndex + 1);
  };

  const handlePreviousStory = () => {
    if (activeStoryIndex <= 0) {
      // navigateToPreviousUser();
      return;
    }
    setActiveStoryIndex(activeStoryIndex - 1);
  };

  const handlePress = (evt) => {
    const x = evt.nativeEvent.locationX;
    const screenWidth = Dimensions.get("window").width;
    let isRight = true;

    if (x < screenWidth / 2) {
      handlePreviousStory();
    } else {
      handleNextStory();
    }
  };

  if (!stories || stories.length === 0) {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <>
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={handlePress}>
          <ImageBackground
            source={{ uri: activeStory.image }}
            style={styles.image}
          >
            <View style={styles.userInfo}>
              <ProfilePicture uri={activeStory.user.image} size={40} />
              <Text style={styles.userName}>{activeStory.user.name} </Text>
              <Text style={styles.postedTime}>{activeStory.createdAt} </Text>
            </View>

            <View style={styles.bottomContainer}>
              <View style={styles.cameraButton}>
                <MaterialIcons name="camera-alt" size={29} color={"#FFF"} />
              </View>

              <View style={styles.textInputContainer}>
                <TextInput
                  style={styles.textInput}
                  editable
                  placeholder="Send Message"
                  placeholderTextColor={"white"}
                />
              </View>

              <View style={styles.sendButton}>
                <MaterialIcons name="send" size={29} color={"#FFF"} />
              </View>
            </View>
          </ImageBackground>
        </TouchableWithoutFeedback>
      </View>
    </>
  );
};

export default StoryScreen;
