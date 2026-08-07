
import React,{useState} from "react";

import {
View,
Text,
FlatList,
StyleSheet
} from "react-native";


export default function FavoritesScreen(){


const [favorites]=useState([

{
id:1,
name:"React Native Course"
},

{
id:2,
name:"Mobile Development"
}

]);



return(

<View style={styles.container}>


<Text style={styles.title}>
Favorites
</Text>


<FlatList

data={favorites}

keyExtractor={
item=>item.id.toString()
}


renderItem={({item})=>(

<Text style={styles.item}>
⭐ {item.name}
</Text>

)}


/>


</View>

)

}



const styles=StyleSheet.create({

container:{
padding:20
},

title:{
fontSize:30
},

item:{
padding:15,
fontSize:18
}

});
