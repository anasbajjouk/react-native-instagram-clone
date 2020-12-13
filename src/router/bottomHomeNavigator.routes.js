import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import HomeRoutes from "./home.routes";
import DiscoveryScreen from "../screens/discoveryScreen";
import NotificationScreen from "../screens/notificationScreen";
import ProfileScreen from "../screens/profileScreen";
import CreatePostScreen from "../screens/createPostScreen";

const Tab = createBottomTabNavigator();

const BottomHomeNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Home") {
            return focused ? (
              <MaterialIcons name="home" size={size} color={color} />
            ) : (
              <AntDesign name="home" size={22} color={color} />
            );
          }

          if (route.name === "Discovery") {
            return focused ? (
              <MaterialIcons
                name="youtube-searched-for"
                size={size}
                color={color}
              />
            ) : (
              <MaterialIcons name="search" size={size} color={color} />
            );
          }

          if (route.name === "Post") {
            return focused ? (
              <AntDesign name="plussquare" size={size} color={color} />
            ) : (
              <AntDesign name="plussquareo" size={size} color={color} />
            );
          }

          if (route.name === "Notification") {
            return focused ? (
              <MaterialIcons
                name="notifications-active"
                size={size}
                color={color}
              />
            ) : (
              <MaterialIcons
                name="notifications-none"
                size={size}
                color={color}
              />
            );
          }

          if (route.name === "Profile") {
            return focused ? (
              <MaterialIcons name="person" size={size} color={color} />
            ) : (
              <MaterialIcons name="person-outline" size={size} color={color} />
            );
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: "#000",
        inactiveTintColor: "gray",
        showLabel: false,
      }}
    >
      <Tab.Screen name="Home" component={HomeRoutes} />
      <Tab.Screen name="Discovery" component={DiscoveryScreen} />
      <Tab.Screen name="Post" component={CreatePostScreen} />
      <Tab.Screen name="Notification" component={NotificationScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomHomeNavigator;
