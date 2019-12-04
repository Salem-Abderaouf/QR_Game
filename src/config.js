import Firebase from 'firebase';

let config = {
apiKey: "AIzaSyCs1aytSvtW_hySYRd8mV_R7awbRzC6s6s",
authDomain: "live-781ec.firebaseapp.com",
databaseURL: "https://live-781ec.firebaseio.com",
projectId: "live-781ec",
storageBucket: "live-781ec.appspot.com",
messagingSenderId: "155691431284",
appId: "1:155691431284:web:37182307d8727b0e5f2821",
measurementId: "G-2P3EN0J2TT"
};

let app = Firebase.initializeApp(config);
export const db = app.database();
