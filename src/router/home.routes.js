import React from "react";
import { Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import { MaterialIcons } from "@expo/vector-icons";

import logo from "../assets/images/logo.png";
import HomeScreen from "../screens/homeScreen";

const HomeStack = createStackNavigator();

const HomeRoutes = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Instagram",
          headerStyle: { shadowOpacity: 0, elevation: 0 },
          headerLeftContainerStyle: {
            marginLeft: 15,
          },
          headerRightContainerStyle: {
            marginRight: 15,
          },
          headerTitleAlign: "center",

          headerTitle: () => (
            <Image
              source={logo}
              style={{ width: 135, height: 50 }}
              resizeMode="contain"
            />
          ),
          headerLeft: () => (
            <MaterialIcons name="camera-alt" size={24} color="black" />
          ),
          headerRight: () => (
            <MaterialIcons name="send" size={25} color={"black"} />
          ),
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeRoutes;
