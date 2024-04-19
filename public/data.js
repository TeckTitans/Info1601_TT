import{initializeApp,getApps}from 'firebase/app';
import{getFirestore,getDocs}from 'firebase/firestore';
import{config} from './firebaseConfig';

initializeApp(config)

const db=getFirestore()

const colRef =collection(db,'Scores')

//get scores

getDocs(colRef)
.then((snapshot)=>{
    console.log(snapshot.docs)
})