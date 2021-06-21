import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    
    apiKey: "AIzaSyBZ4rQNJm4dO6SjsU_QNppW9JTtX4TZYHM",
    authDomain: "todo-app-cp-1f2a9.firebaseapp.com",
    projectId: "todo-app-cp-1f2a9",
    storageBucket: "todo-app-cp-1f2a9.appspot.com",
    messagingSenderId: "273241109528",
    appId: "1:273241109528:web:4d8929b60db6ae20db3f6d",
    measurementId: "G-2LFRL1GM8P"

});


const db =firebaseApp.firestore();


export default db ;