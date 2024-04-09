import Firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBqlhTR2m1vBhWp3WZpn8ruFQgf3-glZa8",
  authDomain: "diariobd-aa52f.firebaseapp.com",
  projectId: "diariobd-aa52f",
  storageBucket: "diariobd-aa52f.appspot.com",
  messagingSenderId: "866907654222",
  appId: "1:866907654222:web:f6378cc9973c49551a1b1f"
};
if (!Firebase.apps.length){

 Firebase.initializeApp(firebaseConfig);

  }

const bdstore = Firebase.firestore();

export default bdstore;
