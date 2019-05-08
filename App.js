import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppNavigator from "./navigation/AppNavigator";
import Amplify from "aws-amplify";
import awsConfig from "./aws-exports";

Amplify.configure(awsConfig);

import { withAuthenticator } from "aws-amplify-react-native";

class App extends React.Component {
  render() {
    return <AppNavigator />;
  }
}
export default App;
// export default withAuthenticator(App);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
