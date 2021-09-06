import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "@firebase/app";
import { getAuth, signInWithEmailAndPassword } from "@firebase/auth";
import {getFirestore} from '@firebase/firestore'
import {getDatabase,ref, set,query,get,child} from 'firebase/database'
import 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRwxrz-juMVbRfo0nu46sNWQcwsv6wQxE",
  authDomain: "admin-6b1ec.firebaseapp.com",
  databaseURL: "https://admin-6b1ec-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "admin-6b1ec",
  storageBucket: "admin-6b1ec.appspot.com",
  messagingSenderId: "50425414865",
  appId: "1:50425414865:web:b75acdcada6e6c1b8a71f0",
  measurementId: "G-Q2GCV26F0R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const login = async () => {
  let user = await signInWithEmailAndPassword(auth,'asd@asd.ru','asdasd')
  return user
}


let store = getFirestore(app)
let database = getDatabase()
// const dbRef = ref(database)
// get(child(dbRef, `sd/`)).then((snapshot) => {
//   if (snapshot.exists()) {
//     console.log(snapshot.val());
//   } else {
//     console.log("No data available");
//   }
// }).catch((error) => {
//   console.error(error);
// });

// async function writeUserData() {
//   const db = getDatabase();
//   set(ref(database, 'sd/'), {
//     username: 'efe',
//     email: 'fefl',
//     profile_picture : 'efef'
//   });
  
  
 

// }
// writeUserData()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
