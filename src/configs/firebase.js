// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getStorage } from "@firebase/storage";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA43WV21-qASrfedLo1gJlwVd8Lwa_SDDs",
  authDomain: "game-web-60e07.firebaseapp.com",
  databaseURL: "https://game-web-60e07-default-rtdb.firebaseio.com",
  projectId: "game-web-60e07",
  storageBucket: "game-web-60e07.appspot.com",
  messagingSenderId: "166402640633",
  appId: "1:166402640633:web:cbca42fbe5a8cfff873028"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage();

