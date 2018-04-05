import React from 'react';
import {StyleSheet,Text,View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class MainHeader extends React.Component{

    render(){
        return (
            <View style={styles.header}>
                <View style={styles.headerBackground}>
                    <Text style={styles.headerText}>Doc storage</Text>
                </View>
                
                <Icon name="arrow-circle-right" size={80} color="#fff" style={styles.icon} backgroundColor="#000"  iconStyle={{color:'yellow'}} />
            </View>
        )
    }
}

const styles=StyleSheet.create({
    header:{
        backgroundColor:'white',
        height:250,
        zIndex:1,
    },
    headerBackground:{
        backgroundColor:'#02b99b',
        height:200
    },
    headerText:{
        color:'white',
        fontSize:40,
        textAlign:'center',
        marginTop:60
    },
    icon:{
        marginTop:-65,
        textAlign:'center'
    }
});