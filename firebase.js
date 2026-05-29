// ===============================
// TERMINAL X FIREBASE SETUP
// ===============================

// FIREBASE IMPORTS

import { initializeApp }

from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {

getAuth,

createUserWithEmailAndPassword,

signInWithEmailAndPassword

}

from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// ===============================
// YOUR FIREBASE CONFIG
// ===============================

const firebaseConfig = {

apiKey: "YOUR_API_KEY",

authDomain: "YOUR_PROJECT.firebaseapp.com",

projectId: "YOUR_PROJECT_ID",

storageBucket:
"YOUR_PROJECT.appspot.com",

messagingSenderId:
"YOUR_SENDER_ID",

appId: "YOUR_APP_ID"

};

// ===============================
// INITIALIZE FIREBASE
// ===============================

const app =
initializeApp(firebaseConfig);

const auth =
getAuth(app);

// ===============================
// SIGN UP
// ===============================

const signupBtn =
document.getElementById("signupBtn");

if(signupBtn){

signupBtn.addEventListener(

"click",

() => {

const email =
document.getElementById("email").value;

const password =
document.getElementById("password").value;

createUserWithEmailAndPassword(

auth,
email,
password

)

.then((userCredential) => {

alert(
"Account created successfully"
);

window.location.href =
"login.html";

})

.catch((error) => {

alert(error.message);

});

}

);

}

// ===============================
// LOGIN
// ===============================

const loginBtn =
document.getElementById("loginBtn");

if(loginBtn){

loginBtn.addEventListener(

"click",

() => {

const email =
document.getElementById(
"loginEmail"
).value;

const password =
document.getElementById(
"loginPassword"
).value;

signInWithEmailAndPassword(

auth,
email,
password

)

.then((userCredential) => {

alert("Login successful");

window.location.href =
"index.html";

})

.catch((error) => {

alert(error.message);

});

}

);

}
