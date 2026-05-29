import {

auth,
db

} from "./firebase.js";

import {

createUserWithEmailAndPassword,

signInWithEmailAndPassword,

signOut

}

from

"https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


import {

doc,
setDoc

}

from

"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


// SIGNUP
window.signup = async function(){

const username =
document.getElementById("username").value;

const email =
document.getElementById("email").value;

const password =
document.getElementById("password").value;


try{

const userCredential =
await createUserWithEmailAndPassword(

auth,
email,
password

);

const user = userCredential.user;


// SAVE USER
await setDoc(

doc(db,"users",user.uid),

{

username:username,
email:email,
uid:user.uid

}

);

alert("Signup Successful");


window.location.href =
"chat.html";

}

catch(error){

alert(error.message);

}

};



// LOGIN
window.login = async function(){

const email =
document.getElementById("email").value;

const password =
document.getElementById("password").value;


try{

await signInWithEmailAndPassword(

auth,
email,
password

);

alert("Login Successful");


window.location.href =
"chat.html";

}

catch(error){

alert(error.message);

}

};



// LOGOUT
window.logout = async function(){

await signOut(auth);

window.location.href =
"login.html";

};




// ADMIN LOGIN
window.adminLogin = function(){

const username =
document.getElementById("adminUsername").value;

const password =
document.getElementById("adminPassword").value;


if(

username === "ADMIN1" &&

password === "TCHAT123"

){

alert("Admin Access Granted");

window.location.href =
"admin.html";

}

else{

alert("Wrong Admin Details");

}

};
