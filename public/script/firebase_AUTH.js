//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
const firebaseConfig = {
    apiKey: "AIzaSyCV0HsQfPdrCptK1V2H0CRdpzItS3-pJYY",
    authDomain: "golfon-6cff0.firebaseapp.com",
    projectId: "golfon-6cff0",
    storageBucket: "golfon-6cff0.appspot.com",
    messagingSenderId: "1418360444",
    appId: "1:1418360444:web:3f666f653c0bb5bf98bbf9",
    measurementId: "G-R084G046H6"
  };

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();