import React from "react";

import {
View,
Text,
StyleSheet
} from "react-native";


export default function SettingsScreen(){


return(

<View style={styles.container}>


<Text style={styles.title}>
Settings
</Text>


<Text style={styles.item}>
🔔 Notifications
</Text>


<Text style={styles.item}>
🌙 Dark Mode
</Text>


<Text style={styles.item}>
🌐 Language
</Text>


<Text style={styles.item}>
Logout
</Text>


</View>

)

}



const styles=StyleSheet.create({

container:{
padding:20
},

title:{
fontSize:30,
marginBottom:30
},

item:{
fontSize:18,
padding:15,
borderBottomWidth:1
}

});
