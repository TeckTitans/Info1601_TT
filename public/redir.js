// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBd5zji0Kd04frEvXYWR9dvIiMozMCC6q4",
    authDomain: "triviatime-1c31d.firebaseapp.com",
    projectId: "triviatime-1c31d",
    storageBucket: "triviatime-1c31d.appspot.com",
    messagingSenderId: "385717513256",
    appId: "1:385717513256:web:b62e51b5f160a11050191d",
    measurementId: "G-33GMW5QP64"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

auth.onAuthStateChanged(user=>{
  if(user){
    console.log('user loggin in',user);
  }else{
    console.log('user logged out');
    window.location.replace('login.html');
  }
  })
        //logout
const logout = document.querySelector('#Logout')
logout.addEventListener('click',(e)=>{
  e.preventDefault();
  auth.signOut().then(()=>{
    alert("logout successful")
  });
});