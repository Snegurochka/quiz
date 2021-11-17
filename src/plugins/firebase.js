import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { AUTH_API_KEY } from '../const';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: AUTH_API_KEY,
  authDomain: "quiz-45114.firebaseapp.com",
  databaseURL: "https://quiz-45114-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "quiz-45114",
  storageBucket: "quiz-45114.appspot.com",
  messagingSenderId: "426579836137",
  appId: "1:426579836137:web:db6042096d674cb2604478"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();

export const usersCollection = db.collection('users');