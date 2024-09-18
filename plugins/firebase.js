import firebase from "firebase";

if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: "AIzaSyAyqSaJNYRY4FXKjP0KIVWpQH0GbxWdT2E",
        authDomain: "fir-pj-70bc4.firebaseapp.com",
        projectId: "fir-pj-70bc4",
        storageBucket: "fir-pj-70bc4.appspot.com",
        messagingSenderId: "587697601865",
        appId: "1:587697601865:web:2399cae2393ddcee88ee98",
        measurementId: "G-4N1DGBLK1V"
    });
}

export default firebase;