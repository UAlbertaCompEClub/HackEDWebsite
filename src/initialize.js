import firebase from "firebase"
export function initializePush(){
    const messaging = firebase.messaging();
    messaging
        .requestPermission()
        .then(() => {
            console.log("Permission granted");
            return messaging.getToken();
        })
        .then(token => {
            console.log("FCM token:", token);
        })
        .catch(error => {
            if (error.code === "messaging/permission-blocked"){
                
            }
        })
}