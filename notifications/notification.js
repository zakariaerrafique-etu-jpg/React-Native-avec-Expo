
import * as Notifications from 'expo-notifications';

export async function sendNotification(){

await Notifications.scheduleNotificationAsync({

content:{

title:"Learner App",

body:"Learning reminder"

},

trigger:{seconds:5}

});

}
