import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyDn5KnwbY3xxotshW_WJsMXOPr6-ERDYiw',
  authDomain: 'employees-list-p14.firebaseapp.com',
  projectId: 'employees-list-p14',
  storageBucket: 'employees-list-p14.appspot.com',
  messagingSenderId: '712474121343',
  appId: '1:712474121343:web:43868c13a52662079b1b4a',
});

export const auth = app.auth();
export default app;
