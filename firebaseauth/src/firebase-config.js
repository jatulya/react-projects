import { initializeApp } from "firebase/app";
import  { getAuth} from 'firebase/auth';

import dotenv from 'dotenv'; 
dotenv.config();

const app = initializeApp(process.env.FIREBASE_CONFIG);
export const auth = getAuth(app)