let config = {
    apiKey: "AIzaSyBd5zji0Kd04frEvXYWR9dvIiMozMCC6q4",
    authDomain: "triviatime-1c31d.firebaseapp.com",
    projectId: "triviatime-1c31d",
    storageBucket: "triviatime-1c31d.appspot.com",
    messagingSenderId: "385717513256",
    appId: "1:385717513256:web:b62e51b5f160a11050191d",
    measurementId: "G-33GMW5QP64"
};
firebase.initializeApp(config);
const db = firebase.firestore();
const app = initializeApp(firebaseConfig);

db.collection('Scores').get().then((snapshot)=>{
    console.log(snapshot.docs);
})