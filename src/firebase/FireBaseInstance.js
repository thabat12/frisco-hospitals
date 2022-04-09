import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
import {doc, collection, setDoc, getDocs, getFirestore, Timestamp, DocumentReference, 
    addDoc, CollectionReference, collectionGroup, query, where, getDoc, updateDoc, enableIndexedDbPersistence, onSnapshot} from 'firebase/firestore';
import {getAuth, setPersistence, signInWithPopup, GoogleAuthProvider, signInWithRedirect, 
    getRedirectResult, onAuthStateChanged, inMemoryPersistence, signOut} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

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
const db = getFirestore(app);
const provider = new GoogleAuthProvider();
var auth = getAuth();

enableIndexedDbPersistence(db)
    .catch(
        (err) => {
            if (err.code == 'failed-precondition') {
                console.log('multiple tabs are open at once');
            } else if (err.code == 'unimplemented') {
                console.log('the browser does not support this');
            }
        }
    )


// this function is going to be accessed by all other methods in the project
export function getUser() {
    return auth.currentUser;
}

export async function isUserLoggedIn() {
    onAuthStateChanged(user => {
        if (user) {
            return true;
        } else {
            return false;
        }
    });
}

export function giveMeAuth() {
    return auth;
}

export default async function handleUserSignIn() {
    // just check if there is a current user on, and if there is then do nothing
    if (auth.currentUser) {
        return auth.currentUser;
    } else {
        // we will push the user into a new page specifically meant for signing in 
        return signInWithAuthStatePersistence();
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

export async function signInWithAuthStatePersistence() {
    setPersistence(auth, inMemoryPersistence)
        .then(
            () => {
                return signInRedirect();
            }
        ).catch(
            (err) => {
                console.log(err);
            }
        );
}


export async function signInRedirect() {
    // provider sign in flow back into the app
    signInWithRedirect(auth, provider);
    /*
        All the doc refs will be defined here and initiated with collections
    */
    getRedirectResult(auth)
        .then(
            result => {
                if (auth.currentUser.metadata.creationTime === auth.currentUser.metadata.lastSignInTime) {
                    writeNewDocument('user/'+auth.currentUser.uid+'/activity', {'joined': auth.currentUser.metadata.creationTime});
                }

                window.location = '/'
                overwriteDocumentData('users/' + auth.currentUser.uid + '/activity/joined', {date: auth.currentUser.metadata.creationTime})
                console.log('this happened');

                console.log(result);

                return auth;
            }
        )
}

export async function signInUsingPopup() {

    signInWithPopup(auth, provider)
        .then(
            (result) => {
                console.log(`result is ${result}`);
                return result;
            }
        );
}

export async function signOutUser() {
    signOut(auth).then(() => {
        console.log('user is successfully singed out');
    }).catch((err) => {
        console.log('an error has occured');
    })
}

export async function writeUserCommitmentData() {

    // let something = new DocumentReference("users/test");
    let otherthing = new CollectionReference('users');
    // let hi = doc(otherthing, 'test');
    console.log(db);

    console.log(auth.currentUser.metadata.lastSignInTime == auth.currentUser.metadata.creationTime);

    const docRef = await setDoc(
        doc(db, 'users', auth.currentUser.uid), {
            newlogin: 'pneis'
        }
    );
}

// reading all the suggested items for the dashboard menu
export async function readSuggestedData(path) {

    const suggestedRef = collection(db, 'dashboard/suggested/suggested')
    const suggestedData = query(suggestedRef);

    let ss = onSnapshot(suggestedData, (snapshot) => {
        if (snapshot) {
            let result = [];

            snapshot.forEach(
                (doc) => {
                    result.push(doc.data());
                }
            );

            return result;
        }
    });

    const suggestedSnapshot = await getDocs(suggestedData);
    let result = []
    suggestedSnapshot.forEach(
        (doc) => {

            const file = doc.data();

            result.push(file);
        }
    );

    return result;
}

/*
    these are the main functions for manipulating the document data using firebase
*/

export async function readCommitmentData() {
    const commitmentRef = collection(db, `users/${auth.currentUser.uid}/commitments`);
    const commitmentData = query(commitmentRef);

    onSnapshot(commitmentData, (snapshot) => {
        if (snapshot) {
            let result = [];

            snapshot.forEach(
                (doc) => {
                    result.push(doc.data());
                }
            );
        }
    }); 

    let snapshot = await getDocs(commitmentData);
    let result = [];

    snapshot.forEach(
        (doc) => {
            result.push(doc.data());
        }
    );

    return result;
}

export async function readActivityData() {
    const activityRef = collection(db, `users/${auth.currentUser.uid}/activity`);
    const activityQuery = query(activityRef);

    onSnapshot(activityQuery, (snapshot) => {
        if (snapshot) {
            let result = [];
            snapshot.forEach(
                (doc) => {
                    result.push(doc.data());
                }
            );

            return result;
        }
    });

    let snapshot = await getDocs(activityQuery);
    let result = [];

    snapshot.forEach(
        (doc) => {
            result.push(doc.data());
        }
    );

    return result;
}

/*
    Volunteering tab stuff
        

*/
export async function readVolunteeringOpportunities() {
    const volunteeringOpportunitiesRef = collection(db, `volunteer`);
    const volunteeringOpportunitiesQuery = query(volunteeringOpportunitiesRef);

    onSnapshot(volunteeringOpportunitiesQuery, (snapshot) => {
            if (snapshot) {
                let result = [];
                snapshot.forEach(
                    (doc) => {
                        result.push(doc.data());
                    }
                );
    
                return result;
            }
        }
    );

    let snapshot = await getDocs(volunteeringOpportunitiesQuery);
    let result = [];

    snapshot.forEach(
        (doc) => {
            result.push(doc.data());
            console.log('data getting')
        }
    );

    return result;
}


// this will automatically point to user either way so that is good
export async function writeNewDocument(path, data) {

    const docRef = await setDoc(
        doc(db, `users/${auth.currentUser.uid}/${path}`), data
    );

    return docRef;
}

// this is for a single document, pointer at the current user as well
export async function readDocumentData(path) {
    const documentRef = doc(db, `users/${auth.currentUser.uid}/${path}`);
    const docSnap = await getDoc(documentRef);
    console.log(path);

    if (docSnap.exists()) {
        console.log(docSnap.data());
        return docSnap.data();

    } else {
        return null;
    }
}

export async function overwriteDocumentData(path, data) {
    const documentRef = doc(db, path);

    const docSnap = await updateDoc(documentRef, data);

    if (docSnap.exists()) {
        return docSnap;
    } else {
        return null;
    }
}
