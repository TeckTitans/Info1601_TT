import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getFirestore, collection, getDoc, addDoc, deleteDoc, doc, getDocs } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js";
import firebaseConfig from "./firebaseConfig.js";


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


async function getReviews(isbn, renderFun){
    const reviewsRef = collection(db, 'Scores');
    const querySnapshot = await getDocs(reviewsRef);
    const reviews = [];
    querySnapshot.forEach((doc) => {
        if (doc.data().isbn === isbn) {
            reviews.push(doc.data());
        }
    });
    renderFun(reviews);
}

async function createReview(auth, isbn, text){
    const reviewData = {
        isbn,
        text,
        userId: auth.currentUser.uid,
        reviewer: auth.displayName + "z" 
    };
    await addDoc(collection(db, "reviews"), reviewData);
}

async function deleteReview(auth, reviewId){
    const reviewRef = doc(db, 'reviews', reviewId);
    const reviewDoc = await getDoc(reviewRef);
    
    if (reviewDoc.exists() && reviewDoc.data().userId === auth.currentUser.uid) {
        await deleteDoc(reviewRef);
        console.log("Review deleted successfully");
        return true;
    } else {
        console.log("Review not found or you don't have permission to delete it");
        return false;
    }
}

export { getReviews, createReview, deleteReview };
