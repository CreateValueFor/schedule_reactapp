import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDsxh2JUWGFNaReJZpiHPfz2WWuGOCy8fw',
  authDomain: 'schedule-84d6f.firebaseapp.com',
  projectId: 'schedule-84d6f',
  storageBucket: 'schedule-84d6f.appspot.com',
  messagingSenderId: '1057171695073',
  appId: '1:1057171695073:web:8dc0219b3a191fcfba5ea0',
};

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;

export const authService = firebase.auth();

export const dbService = firebase.firestore();

export const storageService = firebase.storage();
