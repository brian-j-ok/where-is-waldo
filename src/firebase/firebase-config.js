import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOA-9bvwphP46ox6WIBtKW8PlFSiPTvTs",
  authDomain: "where-s-waldo-7306f.firebaseapp.com",
  projectId: "where-s-waldo-7306f",
  storageBucket: "where-s-waldo-7306f.appspot.com",
  messagingSenderId: "132299956344",
  appId: "1:132299956344:web:fe68ba17cfc153b2200d8d"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app);

console.log(getDocs(collection(db, 'characterCoords')));

export default db;