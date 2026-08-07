
import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveData=async(data)=>{

await AsyncStorage.setItem("articles",JSON.stringify(data));

}

export const loadData=async()=>{

const value=await AsyncStorage.getItem("articles");

return JSON.parse(value);

}
