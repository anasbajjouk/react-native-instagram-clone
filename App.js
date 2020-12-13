import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/homeScreen";
import DiscoveryScreen from "./src/screens/discoveryScreen";
// import PostScreen from "./src/screens/PostScreen";
import NotificationScreen from "./src/screens/notificationScreen";
import ProfileScreen from "./src/screens/profileScreen";
import { Ionicons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Image, View } from "react-native";
import logo from "./src/assets/images/logo.png";
import Router from "./src/router";

export default function App() {
  return (
    <NavigationContainer>
      <ExpoStatusBar barStyle="dark-content" />
      <Router />
    </NavigationContainer>
  );
}
