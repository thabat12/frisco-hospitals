import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
import {doc, collection, setDoc, getDocs, getFirestore, Timestamp} from 'firebase/firestore';
import {getAuth, signInWithPopup, GoogleAuthProvider, signInWithRedirect, getRedirectResult, onAuthStateChanged} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDTGOsZ4zjQGDLwJtRvPloDTcAAtKL5MZ8",
    authDomain: "frisco-hospitals.firebaseapp.com",
    projectId: "frisco-hospitals",
    storageBucket: "frisco-hospitals.appspot.com",
    messagingSenderId: "54170652845",
    appId: "1:54170652845:web:912bd6e3cb9e78aae57624",
    measurementId: "G-TJZVBVD6L3"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();
const provider = new GoogleAuthProvider();
var auth = getAuth();

export default async function handleUserSignIn() {
    if (isUserSignedIn()) {
        console.log('user is signed in');
    } else {
        // we will push the user into a new page specifically meant for signing in 
        console.log('user is not signed in');
        signInRedirect();
    }
}

export function isUserSignedIn() {
    // this is a listener that will trigger when login redirection finishes
    onAuthStateChanged(
        auth, (user) => {
            if (user) {
                return true;
            } else {
                return false;
            }
        }
    )
}

export function signInRedirect() {

    signInWithRedirect(auth, provider)
        .then(
            (user) => {
                console.log(user);
            }
        ).catch(
            (error) => {
                console.log(error);
            }
        )

}