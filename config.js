const firebase = require("firebase");

const firebaseConfig = {
    apiKey: "AIzaSyB0IddqrYrqmdkgFAi1DeRnCd5mJvSFU4k",
    authDomain: "study-firebase-7cdc6.firebaseapp.com",
    projectId: "study-firebase-7cdc6",
    storageBucket: "study-firebase-7cdc6.appspot.com",
    messagingSenderId: "697887420054",
    appId: "1:697887420054:web:cb6495296922639f245cb7",
    measurementId: "G-XDDJR1KX5X",
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const User = db.collection("Users");
module.exports = User;
