import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Create Party"
          onPress={() => this.props.navigation.navigate("CreateParty")}
        />
        <Button
          title="Join Party"
          onPress={() => this.props.navigation.navigate("CreateParty")}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
