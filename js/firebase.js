// Firebase Imports
import { initializeApp }

from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getAuth }

from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import { getFirestore }

from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


// Firebase Config
const firebaseConfig = {

  apiKey: "AIzaSyAtg7n1o0xTUrGFi1rnPIJxqE7t1yKKixc",

  authDomain: "terminal--x.firebaseapp.com",

  projectId: "terminal--x",

  storageBucket: "terminal--x.firebasestorage.app",

  messagingSenderId: "891026994920",

  appId: "1:891026994920:web:6de621572bc0753f76bb5d",

  measurementId: "G-W85M7NEZFG"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Services
const auth = getAuth(app);

const db = getFirestore(app);


// Export
export {

auth,

db

};
