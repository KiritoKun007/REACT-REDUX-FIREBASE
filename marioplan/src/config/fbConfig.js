import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDp58FlYLmlHu1SeuccyZFrIOvKdgbp7KQ",
    authDomain: "react-redux-firebase-3fb7a.firebaseapp.com",
    databaseURL: "https://react-redux-firebase-3fb7a.firebaseio.com",
    projectId: "react-redux-firebase-3fb7a",
    storageBucket: "react-redux-firebase-3fb7a.appspot.com",
    messagingSenderId: "555721028291",
    appId: "1:555721028291:web:c3e8d639293077ef8d2876",
    measurementId: "G-MHY7BTYMDT"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true })
firebase.analytics();

export default firebase;