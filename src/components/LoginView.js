import React from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';
import TextBox  from './controls/TextBox';
import Colors from '../styles/colors';
import MainHeader from './MainHeader';
import Icon from 'react-native-vector-icons/FontAwesome';
import firebase from 'react-native-firebase';
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';

export default class LoginView extends React.Component{
    constructor(){
        super();
        this.state={
            loading:true
        }
        // GoogleSignin.configure({});
    }
    async componentDidMount(){
        console.log('componente did mount');
        try {
            const hasPlayServices=await  GoogleSignin.hasPlayServices({autoResolve:true});
            console.log('has play servicess');
            await GoogleSignin.configure({
                webClientId:"339680789621-ef6lbpg7uv1kpra70n43lg99npbuank3.apps.googleusercontent.com",
                offlineAccess:false});
        } catch (error) {
            console.log(error);
        }
        
    }
    componentWillUnmount(){
        // this.authSubscription();

    }
    async loginUsingGoogle(){
        console.log('login using google sign in');
        try {
            const data=await GoogleSignin.signIn();
            console.log('signed in',data);
            const user = await GoogleSignin.currentUserAsync();
            console.log('user -> ',user);    
        } catch (error) {
            const {code,message} = error;
            console.log('error -> ', message);
        }

    }
    render(){
        return (
            <View style={styles.container}>
                {/* <View style={styles.header}></View> */}
                <View  style={styles.header}>
                    <MainHeader></MainHeader>
                </View>
                
                <View style={styles.body}>
                {/* <GoogleSigninButton
                    style={{width: 48, height: 48}}
                    size={GoogleSigninButton.Size.Icon}
                    color={GoogleSigninButton.Color.Dark}
                    onPress={this.loginUsingGoogle}
                    >
                    
                    </GoogleSigninButton> */}
                    <Icon.Button name="google" backgroundColor="#ff7a00" style={styles.loginButton} onPress={this.loginUsingGoogle} >
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