import firebase from "firebase/app";
import "firebase/firestore";

const firebase = firebase.initalizeApp({
  apiKey: "AIzaSyBVLuYZ5vL0_npAEdF0EMQajQhd7eqPY3k",
  authDomain: "todoist-c2144.firebaseapp.com",
  databaseURL: "https://todoist-c2144.firebaseio.com",
  projectId: "todoist-c2144",
  storageBucket: "todoist-c2144.appspot.com",
  messagingSenderId: "468815587731",
  appId: "1:468815587731:web:c5aa6dbc40d279bc"
});

export { firebaseConfig as firebase };
