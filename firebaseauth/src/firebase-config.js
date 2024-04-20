import { initializeApp } from "firebase/app";
import  { getAuth} from 'firebase/auth';
//.env
const app = initializeApp(FIREBASE_CONFIG);
export const auth = getAuth(app)