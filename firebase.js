// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  doc,
  setDoc,
  collection,
  query,
  getDocs,
  where,
} from 'firebase/firestore';
import dotenv from 'dotenv';
dotenv.config();
//import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: 'emiwebrtc.firebaseapp.com',
  projectId: 'emiwebrtc',
  storageBucket: 'emiwebrtc.appicon.com',
  messagingSenderId: '649381277118',
  appId: '1:649381277118:web:0297ede7f9455a6dcc5def',
  measurementId: 'G-N2W80XWC6K',
};
let app;
let firestoreDb;
const dbTable = 'test_users';
const sampleData = {
  name: 'emi',
  age: 47,
};

const initializeFirebaseApp = () => {
  try {
    app = initializeApp(firebaseConfig);
    firestoreDb = getFirestore();
    return app;
  } catch (err) {
    console.error(err);
  }
};

const uploadData = async () => {
  try {
    const document = doc(firestoreDb, dbTable, Date.now().toString());
    await setDoc(document, sampleData);
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
};

const getData = async () => {
  try {
    const collectionRef = collection(firestoreDb, dbTable);
    const finalData = [];
    const q = query(collectionRef, where('age', '>', 40));
    const docSnapShot = await getDocs(q);
    docSnapShot.forEach((doc) => {
      finalData.push(doc.data());
    });
    return finalData;
  } catch (err) {
    console.error(err);
  }
};

app = await initializeFirebaseApp();
const data = await getData();
console.log(data);
const hasWorked = await uploadData();
console.log(hasWorked);

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
