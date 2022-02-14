import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
import {doc, collection, addDoc, getDocs, getFirestore} from 'firebase/firestore';
import {getAuth, signInWithPopup, GoogleAuthProvider, signInWithRedirect, getRedirectResult} from 'firebase/auth';

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


function something() {

}

export default async function signInGooglePopup() {
    let something = doc(db, 'users/test');

    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    auth.languageCode = 'it';

    let user = signInWithPopup(auth, provider)
        .then(
            (result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;

                const user = result.user;

                return user;
            }
        ). catch(
            (error) => {
                console.log('error occured');
                const errCode = error.code;
                const errMessage = error.message;
                const email = error.email;
                const credential = GoogleAuthProvider.credentialFromError(error);

                return '';
            }
        );

    await user;
    console.log('this is user');
}

export function signInGoogleRedirect() {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithRedirect(auth, provider);

    getRedirectResult(auth)
        .then(
            (result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;

                const user = result.user;
            }
        ).catch(
            (error) => {
                const errCode = error.code;
                const errMessage = error.message;
                const email = error.email;
                const credential = GoogleAuthProvider.credentialFromResult(error);
            }
        )
}

export function saySomething() {
    console.log('i am gonna say something');
}