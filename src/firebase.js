import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCItIDYB-mDANV1esCtPdn1yow9I0L8zlw",
    authDomain: "primepicks-amzclone.firebaseapp.com",
    projectId: "primepicks-amzclone",
    storageBucket: "primepicks-amzclone.appspot.com",
    messagingSenderId: "892113596430",
    appId: "1:892113596430:web:126962ec68705f98188c5f",
    measurementId: "G-SEJZMZ2YRQ"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { db, auth };


// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// export { app, analytics };