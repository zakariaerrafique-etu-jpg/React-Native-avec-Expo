
import React,{useState} from 'react';
import {View,TextInput,Button,Alert} from 'react-native';

export default function SignupScreen(){

const[name,setName]=useState("");
const[email,setEmail]=useState("");
const[password,setPassword]=useState("");

const signup=()=>{

if(name===""||email===""||password===""){
Alert.alert("Error","Please fill all fields");
return;
}

Alert.alert("Success","Account Created");
}

return(

<View>

<TextInput
placeholder="Username"
value={name}
onChangeText={setName}
/>

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
title="Sign Up"
onPress={signup}
/>

</View>

)

}
