import React,{useState} from 'react';
import {View,TextInput,Button,Alert} from 'react-native';

export default function LoginScreen(){

const[email,setEmail]=useState("");
const[password,setPassword]=useState("");

const login=()=>{

if(email===""||password===""){
Alert.alert("Login Error");
return;
}

Alert.alert("Welcome");

}

return(

<View>

<TextInput
placeholder="Email"
value={email}
onChangeText={setEmail}
/>

<TextInput
placeholder="Password"
secureTextEntry
value={password}
onChangeText={setPassword}
/>

<Button
title="Login"
onPress={login}
/>

</View>

)

}
