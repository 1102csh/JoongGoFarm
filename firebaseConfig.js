// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import firebase from 'firebase';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

let app;
if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig);
}
// Initialize Firebase
//const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(app);

export { firebase , db};