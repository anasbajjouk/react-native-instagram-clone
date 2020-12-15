import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Router from "./src/router";
import { withAuthenticator } from "aws-amplify-react-native";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);

const App = () => {
  return (
    <NavigationContainer>
      <ExpoStatusBar barStyle="dark-content" />
      <Router />
    </NavigationContainer>
  );
};

export default withAuthenticator(App);
