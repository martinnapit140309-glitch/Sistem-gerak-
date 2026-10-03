const firebaseConfig = {
  apiKey: "AIzaSyD2g4BeXNvikMfGzuqrzwUNRg7lRjbP1DI",
  authDomain: "sistem-gerak-538c5.firebaseapp.com",
  databaseURL: "https://sistem-gerak-538c5-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "sistem-gerak-538c5",
  storageBucket: "sistem-gerak-538c5.firebasestorage.app",
  messagingSenderId: "379671212909",
  appId: "1:379671212909:web:8feb8f4be5d6056c232064"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database(), auth = firebase.auth();
const TS = firebase.database.ServerValue.TIMESTAMP;
let tOff = 0;
db.ref('.info/serverTimeOffset').on('value', s => tOff = s.val() || 0);
const now = () => Date.now() + tOff;
const R = c => db.ref('rooms/' + c);
async function login() {
  if (!auth.currentUser) await auth.signInAnonymously();
  return auth.currentUser.uid;
}
