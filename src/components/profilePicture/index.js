import React from "react";
import { Image, View } from "react-native";
import styles from "./styles";

const ProfilePicture = ({ uri, size = 60 }) => {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.imageContainer,
          {
            width: size + 8,
            height: size + 8,
            borderRadius: (size + 8) / 2,
          },
        ]}
      >
        <Image
          style={[
            styles.image,
            { width: size, height: size, borderRadius: size / 2 },
          ]}
          source={{
            uri,
          }}
        />
      </View>
    </View>
  );
};

export default ProfilePicture;
