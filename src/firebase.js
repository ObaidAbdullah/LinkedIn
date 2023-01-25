// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyD0mlNqXRyOTLwfY23ewURDeVCIeKB5WgQ",
    authDomain: "linkedin-clone-b47f0.firebaseapp.com",
    projectId: "linkedin-clone-b47f0",
    storageBucket: "linkedin-clone-b47f0.appspot.com",
    messagingSenderId: "941035222830",
    appId: "1:941035222830:web:bf6e53f00626f6e54f6cbf",
    measurementId: "G-9SXPBNBVMT"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db , auth};