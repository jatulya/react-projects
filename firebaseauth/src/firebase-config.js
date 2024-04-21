import { initializeApp } from "firebase/app";
import  { getAuth} from 'firebase/auth';
import {getFirestore} from '@firebase/firestore'
import {getStorage} from 'firebase/storage'
//.env
const FIREBASE_CONFIG = {
    apiKey: "AIzaSyCJj5w7kwQsxh7a34R03CdIsJWIw7FKP18",
    authDomain: "fir-auth-f9199.firebaseapp.com",
    projectId: "fir-auth-f9199",
    storageBucket: "fir-auth-f9199.appspot.com",
    messagingSenderId: "813767400147",
    appId: "1:813767400147:web:1a9675859f9ef9a984d226",
    measurementId: "G-MM239HFE8X"
  };
  
const app = initializeApp(FIREBASE_CONFIG);
export const auth = getAuth(app)
export const db  = getFirestore(app)
export const storage = getStorage(app)