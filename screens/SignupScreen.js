import React,{useState} from "react";

import {
View,
Text,
TextInput,
Button,
Alert,
StyleSheet
} from "react-native";


export default function SignupScreen({navigation}){


const [username,setUsername]=useState("");
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");



const signup=()=>{


if(
username==="" ||
email==="" ||
password===""
){

Alert.alert(
"Signup Error",
"All fields are required"
);

return;

}


Alert.alert(
"Success",
"Account created"
);


navigation.navigate("Login");


};



return(

<View style={styles.container}>


<Text style={styles.title}>
Create Account
</Text>


<TextInput
style={styles.input}
placeholder="Username"
value={username}
onChangeText={setUsername}
/>


<TextInput
style={styles.input}
placeholder="Email"
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
title="Signup"
onPress={signup}
/>


<Text
style={styles.link}
onPress={()=>navigation.navigate("Login")}
>
Already have account? Login
</Text>


</View>

)

}



const styles=StyleSheet.create({

container:{
flex:1,
justifyContent:"center",
padding:20
},

title:{
fontSize:30,
textAlign:"center",
marginBottom:30
},

input:{
borderWidth:1,
padding:12,
marginBottom:15
},

link:{
marginTop:20,
textAlign:"center"
}

});
