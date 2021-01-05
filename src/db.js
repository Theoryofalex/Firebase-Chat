import firebase from "firebase/app";
import "firebase/database";

const config = {
    apiKey: "AIzaSyA1CwETOujWS-UNkzG6M9MOcqqZCEWBfSg",
    authDomain: "firevuechat-52292.firebaseapp.com",
    projectId: "firevuechat-52292",
    storageBucket: "firevuechat-52292.appspot.com",
    messagingSenderId: "228433367394",
    appId: "1:228433367394:web:703f003f1fe1d126d19c3b"
}

const db = firebase.initializeApp(config);
export default db;