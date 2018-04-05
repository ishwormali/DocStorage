import React from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';
import TextBox  from './controls/TextBox';
import Colors from '../styles/colors';
import MainHeader from './MainHeader';
import Icon from 'react-native-vector-icons/FontAwesome';
import firebase from 'react-native-firebase';
// import {GoogleSignin} from 'react-native-google-signin';

export default class LoginView extends React.Component{
    loginUsingGoogle(){
        console.log('login using firebase');
        // GoogleSignin.signIn()
        //     .then((data)=>{
        //         const credential=firebase.auth.GoogleAuthProvider.credential(data.idToken,data.accessToken);
        //         return firebase.auth().signInWithCredential(credential);
        //     })
        //     .then((user)=>{
        //         console.log(user);
        //     })
        //     .catch((error)=>{
        //         const {code,message} = error;
        //         console.log('error -> ', message);
        //     })
        //     ;
        // firebase.auth()
        //     .signInAnonymouslyAndRetrieveData()
        //     .then(credential=>{
        //         if(credential) {
        //             console.log('default app user -> ',credential.user.toJSON());
        //         }
        //     });
    }
    render(){
        return (
            <View style={styles.container}>
                {/* <View style={styles.header}></View> */}
                <View  style={styles.header}>
                    <MainHeader></MainHeader>
                </View>
                
                <View style={styles.body}>
                    <Icon.Button name="google" backgroundColor="#ff7a00" style={styles.loginButton} onPress={this.loginUsingGoogle}>
                                Login using google
                    </Icon.Button>
                    {/* <View style={styles.loginBox}>
                   
                        
                        
                    </View> */}
                </View>
               
                {/* <TextInput placeholder="Username" style={styles.textBox} /> */}
            </View>

        );
    }
}

const styles=StyleSheet.create({
    textBox:{
        flex:1,
        height:20
    },
    container:{
        backgroundColor:Colors.background,
        flex:1,
        alignContent:"center"
    },
    header:{
        
    },
    body:{
        flex:1,
        alignContent:"center",
        alignItems:"center",
        paddingTop:50
    },
    loginBox:{
        backgroundColor:"white",
        
    },
    loginButton:{
        height:40,
        padding:30
    }
});


// top:-100,
//         height:100,
//         width:300,
//         borderRadius:8,
//         borderWidth:0,
//         borderColor:"red",
//         alignContent:"center",
//         justifyContent:"center",
//         zIndex:0