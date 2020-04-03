import * as firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyA-saof75WhGtjL6S0i1YPUlcYGrkNHfFA",
    authDomain: "react-54ed3.firebaseapp.com",
    databaseURL: "https://react-54ed3.firebaseio.com",
    projectId: "react-54ed3",
    storageBucket: "react-54ed3.appspot.com",
    messagingSenderId: "410444944489",
    appId: "1:410444944489:web:9276e84317ffbddc6a3ef8",
    measurementId: "G-WB0DRQ7P0E"
};

// Initialize Firebase
const fireb = firebase.initializeApp(firebaseConfig);
firebase.analytics();
export default fireb;