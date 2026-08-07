import React, {useState} from "react";
import {
 View,
 Text,
 TextInput,
 Button,
 Alert,
 StyleSheet
} from "react-native";


export default function LoginScreen({navigation}){

const [email,setEmail]=useState("");
const [password,setPassword]=useState("");


const login=()=>{

if(email==="" || password===""){

Alert.alert(
"Login Error",
"Please enter email and password"
);

return;

}


Alert.alert(
"Success",
"Welcome to Learner App"
);


navigation.navigate("Home");

};


return(

<View style={styles.container}>

<Text style={styles.title}>
Login
</Text>


<TextInput
style={styles.input}
placeholder="Email"
keyboardType="email-address"
value={email}
onChangeText={setEmail}
/>


<TextInput
style={styles.input}
placeholder="Password"
secureTextEntry
value={password}
onChangeText={setPassword}
/>


<Button
title="Login"
onPress={login}
/>


<Text
style={styles.link}
onPress={()=>navigation.navigate("Signup")}
>
Don't have an account? Register
</Text>


</View>

);

}



const styles=StyleSheet.create({

container:{
flex:1,
padding:20,
justifyContent:"center"
},

title:{
fontSize:30,
textAlign:"center",
marginBottom:30
},

input:{
borderWidth:1,
padding:12,
marginBottom:15,
borderRadius:8
},

link:{
marginTop:20,
textAlign:"center"
}

});
