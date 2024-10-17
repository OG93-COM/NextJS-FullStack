
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDSyoJLwQM8EiVhvXcoJzByWLDLYbXHEK4",
  authDomain: "nextauth-e8ad0.firebaseapp.com",
  projectId: "nextauth-e8ad0",
  storageBucket: "nextauth-e8ad0.appspot.com",
  messagingSenderId: "107628651356",
  appId: "1:107628651356:web:abfb224cceedd9338a5799"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)