import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAW45IfGBSZc5YUIpij3-ltBeqBg5fc6LE",
    authDomain: "linkedin-clone-3391a.firebaseapp.com",
    projectId: "linkedin-clone-3391a",
    storageBucket: "linkedin-clone-3391a.appspot.com",
    messagingSenderId: "884418206526",
    appId: "1:884418206526:web:375eac901c52eb1aa1ea6f"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
