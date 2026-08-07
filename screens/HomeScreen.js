import React,{useEffect,useState} from "react";
import Header from "../components/Header";
import {
View,
Text,
FlatList,
TouchableOpacity,
StyleSheet
} from "react-native";


export default function HomeScreen({navigation}){


const [articles,setArticles]=useState([]);



useEffect(()=>{


fetch(
"https://jsonplaceholder.typicode.com/posts"
)

.then(response=>response.json())

.then(data=>setArticles(data.slice(0,10)));


},[]);



return(

<View style={styles.container}>


<Text style={styles.header}>
📚 Learner App
</Text>


<FlatList

data={articles}

keyExtractor={
item=>item.id.toString()
}


renderItem={({item})=>(


<TouchableOpacity

style={styles.card}

onPress={()=>navigation.navigate(
"Detail",
{article:item}
)}

>


<Text>
{item.title}
</Text>


</TouchableOpacity>


)}

/>


</View>

)

}



const styles=StyleSheet.create({

container:{
flex:1,
padding:15
},

header:{
fontSize:25,
fontWeight:"bold",
marginBottom:20
},

card:{
padding:20,
borderWidth:1,
marginBottom:10,
borderRadius:10
}

});
