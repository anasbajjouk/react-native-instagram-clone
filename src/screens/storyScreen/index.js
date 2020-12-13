import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Platform,
  StatusBar,
  ImageBackground,
  ActivityIndicator,
  StyleSheet,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import ProfilePicture from "../../components/profilePicture";
import data from "../../data/stories";
import { styles } from "./styles";

const StoryScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const [userStoriesState, setUserStoriesState] = useState(null);
  const [activeStoryIndex, setActiveStoryIndex] = useState(null);

  const userId = route.params.userId;

  useEffect(() => {
    const userStories = data.find((storyData) => storyData.user.id === userId);

    setUserStoriesState(userStories);
    setActiveStoryIndex(0);
  }, []);

  if (!userStoriesState) {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }

  const activeStory = userStoriesState.stories[activeStoryIndex];

  const navigateToNextUser = () => {
    navigation.push("Story", { userId: (parseInt(userId) + 1).toString() });
  };

  const navigateToPreviousUser = () => {
    navigation.push("Story", { userId: (parseInt(userId) - 1).toString() });
  };

  const handleNextStory = () => {
    if (activeStoryIndex >= userStoriesState.stories.length - 1) {
      navigateToNextUser();
      return;
    }
    setActiveStoryIndex(activeStoryIndex + 1);
  };

  const handlePreviousStory = () => {
    if (activeStoryIndex <= 0) {
      navigateToPreviousUser();
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

  return (
    <>
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={handlePress}>
          <ImageBackground
            source={{ uri: activeStory.imageUri }}
            style={styles.image}
          >
            <View style={styles.userInfo}>
              <ProfilePicture uri={userStoriesState.user.imageUri} size={40} />
              <Text style={styles.userName}>{userStoriesState.user.name} </Text>
              <Text style={styles.postedTime}>{activeStory.postedTime} </Text>
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
