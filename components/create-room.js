import React from 'react';
import { View } from 'react-native';
import { Provider as PaperProvider, Button,  Text, TextInput } from 'react-native-paper';
import {styles, theme} from './global-styles'


// TODO: Learn how History will be passed to this component for Routing
  export default class CreateRoom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
            Name: "RoomName",
            RoomCode: "RoomCode"
        }
    }

    PutRoom(){
        console.log("I AM GOING TO DO AN API REQUEST")
        console.log("My Room Name is " + this.state.Name)
        console.log("My Room Code is " + this.state.RoomCode)
    }
    render() {
        // TODO: Refactor Text Styles out to seperate File
        return (
            <PaperProvider theme={theme}>
                <View style={styles.container}>
                    <TextInput
                        style={{width: '100%', borderWidth: 1}}
                        label='Room Name'
                        mode='flat'
                        onChangeText={(text) => this.setState({Name: text})}
                        value={this.state.Name}
                    />
                    <Button style={{marginTop: 20, width: '35%'}} mode="contained" onPress={this.PutRoom.bind(this)}>
                        <Text style={{ fontSize: 24, color:'#000000' }}>CREATE</Text>
                    </Button>
                </View>
            </PaperProvider>
        );
    }
}
