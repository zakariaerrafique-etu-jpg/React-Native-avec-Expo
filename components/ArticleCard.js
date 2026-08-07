
import React from "react";

import {
View,
Text,
TouchableOpacity,
StyleSheet
} from "react-native";


export default function ArticleCard({
article,
onPress,
favorite=false,
onFavorite
}){


return(

<TouchableOpacity
style={styles.card}
onPress={onPress}
>


<View>


<Text style={styles.title}>
{article.title}
</Text>


<Text style={styles.body}
numberOfLines={2}>
{article.body}
</Text>


</View>



<TouchableOpacity
onPress={onFavorite}
>

<Text style={styles.favorite}>
{
favorite ? "⭐" : "☆"
}
</Text>


</TouchableOpacity>



</TouchableOpacity>

);

}



const styles=StyleSheet.create({

card:{

backgroundColor:"#ffffff",

padding:15,

marginVertical:8,

borderRadius:12,

borderWidth:1,

flexDirection:"row",

justifyContent:"space-between",

alignItems:"center"

},


title:{

fontSize:18,

fontWeight:"bold",

marginBottom:8,

width:"85%"

},


body:{

color:"gray",

width:"85%"

},


favorite:{

fontSize:28

}


});
