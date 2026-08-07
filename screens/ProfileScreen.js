
import React from "react";

import {
View,
Text,
StyleSheet
} from "react-native";


export default function ProfileScreen(){


return(

<View style={styles.container}>


<Text style={styles.title}>
Profile
</Text>


<Text>
Username : Student
</Text>


<Text>
Email : student@gmail.com
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
marginBottom:20
}

});
