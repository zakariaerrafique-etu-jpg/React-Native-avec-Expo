
import React,{useEffect,useState} from 'react';
import {View,Text,FlatList} from 'react-native';

export default function HomeScreen(){

const[data,setData]=useState([]);

useEffect(()=>{

fetch("https://jsonplaceholder.typicode.com/posts")

.then(r=>r.json())

.then(setData);

},[]);

return(

<FlatList

data={data}

keyExtractor={item=>item.id.toString()}

renderItem={({item})=>

<Text>{item.title}</Text>

}

/>

);

}
