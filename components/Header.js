
import React from "react";


import {

View,

Text,

Image,

StyleSheet

} from "react-native";



export default function Header(){


return(

<View style={styles.header}>


<Image

source={
require("../assets/logo.png")
}

style={styles.logo}

/>


<Text style={styles.title}>

Learner App

</Text>



</View>

)

}



const styles=StyleSheet.create({


header:{


height:80,


flexDirection:"row",


alignItems:"center",


paddingHorizontal:20,


backgroundColor:"#fff",


elevation:4


},



logo:{


width:50,


height:50,


marginRight:15


},



title:{


fontSize:25,


fontWeight:"bold"


}



});
