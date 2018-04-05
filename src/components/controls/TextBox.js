import React from 'react';
import {TextInput, StyleSheet,Text} from 'react-native';

export default class TextBox extends React.Component{
    render(){
        return (
            // <Text>new text</Text>
        <TextInput style={styles.box} {...this.props} />
    );
    }
}

const styles=StyleSheet.create({
    box:{
        height:30,
        width:200
    }
});


