import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
import {doc, collection, setDoc, getDocs, getFirestore, Timestamp} from 'firebase/firestore';
import {getAuth, setPersistence, signInWithPopup, GoogleAuthProvider, signInWithRedirect, getRedirectResult, onAuthStateChanged, inMemoryPersistence, signOut} from 'firebase/auth';

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



// this function is going to be accessed by all other methods in the project
export function getUser() {
    return auth.currentUser;
}

export default async function handleUserSignIn() {
    // just check if there is a current user on, and if there is then do nothing
    if (auth.currentUser) {
        console.log('user is signed in');
    } else {
        // we will push the user into a new page specifically meant for signing in 
        signInWithAuthStatePersistence();
    }
}

/*
    Handle user sign in is being used by the SignInPage, here is the workflow: 

    1. Sign in with Google
        a. if there is a current user, then don't do anything (for now)
        b. if there is NOT a current user, then we will log in with AuthStatePersistence on local device
    2. Sign in with auth state (local storage)
        a. this will just store the signed in details on device local storage
        b. if this step does not work, there will be an error message in console
    3. Finally, the main method is going to be the SignInRedirect method
        a. when there is a current user auth change, then we should either redirect this user to:
            i. the dashboard screen IF there is a current non-null user
            ii. the login screen if there is a NULL user

*/

export function signInWithAuthStatePersistence() {
    setPersistence(auth, inMemoryPersistence)
        .then(
            () => {
                return signInRedirect();
            }
        ).catch(
            (err) => {
                console.log(err);
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

export async function signOutUser() {
    signOut(auth).then(() => {
        console.log('user is successfully singed out');
    }).catch((err) => {
        console.log('an error has occured');
    })
}



