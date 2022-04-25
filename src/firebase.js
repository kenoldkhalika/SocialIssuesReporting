// //import firebase from "firebase/compat/app";
// import firebase from "firebase/app";
// import "firebase/database";




// var firebaseConfig = {
//     apiKey: "AIzaSyCzqvMiVP7sF3FmAiM8wHEDqfeokwYvq5Y",
//     authDomain: "social-services-7f0c9.firebaseapp.com",
//     databaseURL: "https://social-services-7f0c9-default-rtdb.firebaseio.com",
//     projectId: "social-services-7f0c9",
//     storageBucket: "social-services-7f0c9.appspot.com",
//     messagingSenderId: "908467162107",
//     appId: "1:908467162107:web:87bed09fb960dc00b1995e"
//   };

//   // Initialize Firebase
// //  const fireDb = firebase.initializeApp(firebaseConfig);
 

// //  export default fireDb.database().ref(); 
// firebase.initializeApp(firebaseConfig);
// export default firebase;



import firebase from 'firebase';
  
/* The credentials for the firebase database. */
const firebaseConfig = {
    // Your Credentials
    apiKey: "AIzaSyCzqvMiVP7sF3FmAiM8wHEDqfeokwYvq5Y",
        authDomain: "social-services-7f0c9.firebaseapp.com",
        databaseURL: "https://social-services-7f0c9-default-rtdb.firebaseio.com",
        projectId: "social-services-7f0c9",
        storageBucket: "social-services-7f0c9.appspot.com",
        messagingSenderId: "908467162107",
        appId: "1:908467162107:web:87bed09fb960dc00b1995e"
};
    
firebase.initializeApp(firebaseConfig);
var database = firebase.database();
  
export default database;