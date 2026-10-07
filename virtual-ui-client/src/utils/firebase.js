
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "virtual-ui-ca9d2.firebaseapp.com",
  projectId:  "virtual-ui-ca9d2",
  storageBucket: "virtual-ui-ca9d2.firebasestorage.app",
  messagingSenderId: "869232908031",
  appId: "1:869232908031:web:85032378f50b7b7b629eca"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth , provider}