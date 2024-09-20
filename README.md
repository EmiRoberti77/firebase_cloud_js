# Firebase Firestore Project
This project demonstrates how to integrate Firebase with Firestore using Node.js and the Firebase SDK, including functionalities for uploading and retrieving data.

# Prerequisites
Before running the project, ensure you have the following:

# Node.js installed on your machine.
Firebase Project setup:
Create a Firebase project here.
Enable Firestore in your Firebase project.
Environment Variables: Store your Firebase API Key securely in a .env file.
Setup
1. Clone the Repository
2. Install Dependencies
```bash
npm i
```
3. Create a .env File
Create a .env file in the root directory and add your Firebase configuration:
```bash
API_KEY=your-firebase-api-key
```
4. Firebase Configuration
The Firebase configuration is imported from environment variables and used to initialize the Firebase app and Firestore:
```javascript
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: 'emiwebrtc.firebaseapp.com',
  projectId: 'emiwebrtc',
  storageBucket: 'emiwebrtc.appicon.com',
  messagingSenderId: '649381277118',
  appId: '1:649381277118:web:0297ede7f9455a6dcc5def',
  measurementId: 'G-N2W80XWC6K',
};

```
# Functions
1. initializeFirebaseApp()
Initializes Firebase using the Firebase config. If initialization fails, it catches the error and logs it.
```javascript
const initializeFirebaseApp = () => {
  try {
    app = initializeApp(firebaseConfig);
    firestoreDb = getFirestore();
    return app;
  } catch (err) {
    console.error(err);
  }
};
```
2. uploadData()
Uploads sample data to the Firestore test_users collection. It creates a document with a timestamp as the document ID and adds sample data to the collection.
```bash
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
```
```bash
const getData = async () => {
  try {
    const collectionRef = collection(firestoreDb, dbTable);
    const finalData = [];
    const q = query(collectionRef);
    const docSnapShot = await getDocs(q);
    docSnapShot.forEach((doc) => {
      finalData.push(doc.data());
    });
    return finalData;
  } catch (err) {
    console.error(err);
  }
};

```


![Screenshot 2024-09-20 at 06 04 57](https://github.com/user-attachments/assets/b14cbd61-03ce-40c2-a6fd-91676282eb5d)
