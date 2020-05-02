import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA-sNzDugMKMaHzo0R7MKbswYmk8wRWAb8",
    authDomain: "best-collections-ffc28.firebaseapp.com",
    databaseURL: "https://best-collections-ffc28.firebaseio.com",
    projectId: "best-collections-ffc28",
    storageBucket: "best-collections-ffc28.appspot.com",
    messagingSenderId: "105754192094",
    appId: "1:105754192094:web:44977f347fdd64db3cba4f",
    measurementId: "G-1HC5YEGNJZ"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;
  //  documentRef can do set/get/update/delete
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  //check if there is data for that id in that location
  if(!snapShot.exists) {
     const { displayName, email } = userAuth;
     const createdAt = new Date();
     try {
         await userRef.set({
             displayName,
             email,
             createdAt,
             ...additionalData
         })
     } catch (err) {
         console.log('error creating user');
     }
  }

  return userRef;
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const signInWithEmail = (email, password) => auth.signInWithEmailAndPassword(email, password);
export const createAccountWithEmail = (email, password) => auth.createUserWithEmailAndPassword(email, password);
export default firebase;