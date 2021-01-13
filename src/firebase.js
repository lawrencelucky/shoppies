import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDUFPNwZdmnxogfI64c2mrwhGQdgw4bX-M',
  authDomain: 'shoppies-16901.firebaseapp.com',
  projectId: 'shoppies-16901',
  storageBucket: 'shoppies-16901.appspot.com',
  messagingSenderId: '399509317085',
  appId: '1:399509317085:web:236d9a73e46c7c9d814234',
  measurementId: 'G-TRWSBWYJ6X',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebaseApp.firestore();

export { auth, db };
