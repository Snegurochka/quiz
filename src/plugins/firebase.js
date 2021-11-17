import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { AUTH_API_KEY } from '../const';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: AUTH_API_KEY,
  authDomain: "vue-quiz-4540c.firebaseapp.com",
  projectId: "vue-quiz-4540c",
  storageBucket: "vue-quiz-4540c.appspot.com",
  messagingSenderId: "837791604404",
  appId: "1:837791604404:web:2643f1500d1a75716bc1e1",
  measurementId: "G-6NYJLGR59W"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();

export const usersCollection = db.collection('users');
