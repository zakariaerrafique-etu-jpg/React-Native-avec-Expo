
import React from 'react';
import {View,Text} from 'react-native';

export default function DetailScreen({route}){

const{article}=route.params;

return(

<View>

<Text>{article.title}</Text>

<Text>{article.body}</Text>

</View>

)

}
