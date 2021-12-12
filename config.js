 import firebase from 'firebase';

const firebaseConfig = {
   
  apiKey: "AIzaSyCBbl1XRoLa5u1bCXPG36jEaN7Z4UAGzAc",
  authDomain: "school-attendance-app-c6b72.firebaseapp.com",
  databaseURL: "https://school-attendance-app-c6b72-default-rtdb.firebaseio.com",
  projectId: "school-attendance-app-c6b72",
  storageBucket: "school-attendance-app-c6b72.appspot.com",
  messagingSenderId: "82850500221",
  appId: "1:82850500221:web:d98f994d9ce6ac592d2b14"
};

  // Initialize Firebase

if (!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
}

export default firebase.database();

  