// firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDlUAc_bXg6zaE9qSz10jASHnQORL3OB9o",
  authDomain: "sapiens-30471.firebaseapp.com",
  projectId: "sapiens-30471",
  storageBucket: "sapiens-30471.firebasestorage.app",
  messagingSenderId: "371016507285",
  appId: "1:371016507285:web:214b8c81b8a2921c94609c",
  measurementId: "G-DSGPL3B6M6"
};

const app = initializeApp(firebaseConfig);

let analytics = null;
isSupported().then((yes) => {
  if (yes) analytics = getAnalytics(app);
});

export { app, analytics };
