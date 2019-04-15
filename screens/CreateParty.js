import React from "react";
import t from "tcomb-form-native";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight
} from "react-native";

const Form = t.form.Form;

var Provider = t.enums({
  Spotify: "Spotify",
  SoundCloud: "SoundCloud",
  AppleMusic: "AppleMusic",
  Youtube: "Youtube"
});
const PartyFormStruct = t.struct({
  name: t.String,
  provider: Provider
});

var options = {}; // optional rendering options (see documentation)
export default class CreateParty extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* display */}
        <Form ref="form" type={PartyFormStruct} options={options} />
        <TouchableHighlight
          style={styles.button}
          onPress={this.onPress}
          underlayColor="#99d9f4"
        >
          <Text
            style={styles.buttonText}
            onPress={() => {
              var value = this.refs.form.getValue();
              if (value) {
                console.log(value);
              } else {
                console.log("error");
              }
            }}
          >
            Create
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}
var styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    marginTop: 50,
    padding: 20,
    backgroundColor: "#ffffff"
  },
  buttonText: {
    fontSize: 18,
    color: "white",
    alignSelf: "center"
  },
  button: {
    height: 36,
    backgroundColor: "#48BBEC",
    borderColor: "#48BBEC",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: "stretch",
    justifyContent: "center"
  }
});
