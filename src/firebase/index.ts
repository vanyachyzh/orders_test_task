import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, OAuthProvider  } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCmKaDNtvUVJfkKEgHefWICmUmbjWs7W9w',
  authDomain: 'orders-test-task.firebaseapp.com',
  projectId: 'orders-test-task',
  storageBucket: 'orders-test-task.appspot.com',
  messagingSenderId: '781816355082',
  appId: '1:781816355082:web:0c7b02d8ca80468d3dc2f3',
  measurementId: 'G-523JB878JN',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider()
export const microsoftProvider = new OAuthProvider('microsoft.com');
