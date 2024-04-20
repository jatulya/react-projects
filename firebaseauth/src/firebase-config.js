import { initializeApp } from "firebase/app";
import  { getAuth} from 'firebase/auth';
import {getFirestore} from '@firebase/firestore' // Import the module only where it
//.env
const app = initializeApp(FIREBASE_CONFIG);
export const auth = getAuth(app)
export const db  = getFirestore(app)