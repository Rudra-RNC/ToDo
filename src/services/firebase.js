// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfZy0-g6gztBEBupaA1ADVFHiXbTZEUtg",
  authDomain: "todo-app-iete.firebaseapp.com",
  projectId: "todo-app-iete",
  storageBucket: "todo-app-iete.firebasestorage.app",
  messagingSenderId: "454020810929",
  appId: "1:454020810929:web:913674ee04a564b1e4fa90",
  measurementId: "G-Z92GWZ7G1B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase services
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

export const todosCollection = 'todos';

export default app;