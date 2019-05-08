import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class PartyPage extends React.Component {
    render() {
      return (
        <View style={styles.container}>
            <Button
            title="Create Party"
            onPress={() =>
                this.props.navigation.navigate('Friends')
            }
            />
            <Button
            title="Join Party"
            onPress={() =>
                this.props.navigation.navigate('Friends')
            }
            />            
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });