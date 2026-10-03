// ====== ISI BAGIAN INI DENGAN KONFIGURASI FIREBASE ANDA ======
// Firebase Console > Project settings > Your apps > Web app > Config
const firebaseConfig = {
  apiKey: "ISI_API_KEY",
  authDomain: "ISI_AUTH_DOMAIN",
  databaseURL: "ISI_DATABASE_URL",
  projectId: "ISI_PROJECT_ID",
  storageBucket: "ISI_STORAGE_BUCKET",
  messagingSenderId: "ISI_SENDER_ID",
  appId: "ISI_APP_ID"
};
// =============================================================

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
