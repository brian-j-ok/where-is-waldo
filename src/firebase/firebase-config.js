import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4K66WWpmDqAbi9CC-CZr6zaknDyoJ6zU",
  authDomain: "where-is-waldo-2b897.firebaseapp.com",
  projectId: "where-is-waldo-2b897",
  storageBucket: "where-is-waldo-2b897.appspot.com",
  messagingSenderId: "770516135102",
  appId: "1:770516135102:web:f031af38da968c834d02ef"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app);

export default db;