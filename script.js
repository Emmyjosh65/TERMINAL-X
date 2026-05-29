// ===============================
// TERMINAL X CHAT SYSTEM
// ===============================

// INPUTS

const input =
document.getElementById("user-input");

const sendBtn =
document.getElementById("send-btn");

const messages =
document.getElementById("messages");

// ===============================
// SAVE CHAT
// ===============================

function saveChat(){

localStorage.setItem(

"terminalx_chats",

messages.innerHTML

);

}

// ===============================
// LOAD CHAT
// ===============================

window.onload = function(){

const savedChats =

localStorage.getItem(
"terminalx_chats"
);

if(savedChats){

messages.innerHTML =
savedChats;

scrollBottom();

}

};

// ===============================
// AUTO SCROLL
// ===============================

function scrollBottom(){

messages.scrollTop =
messages.scrollHeight;

}

// ===============================
// TYPE EFFECT
// ===============================

function typeText(element,text){

let index = 0;

element.innerHTML = "";

const typing = setInterval(() => {

if(index < text.length){

element.innerHTML +=
text.charAt(index);

index++;

scrollBottom();

}

else{

clearInterval(typing);

saveChat();

}

},15);

}

// ===============================
// BOT REPLIES
// ===============================

function botReply(userMessage){

let reply = "";

const text =
userMessage.toLowerCase();

// ===============================
// CUSTOM REPLIES
// ===============================

if(text.includes("hello")
|| text.includes("hi")){

reply =
"Hello 👋 Welcome to TERMINAL X";

}

else if(text.includes("owner")){

reply =
`
OWNERS:<br><br>

DANNY:
<a href="https://wa.me/2348072285862" target="_blank">
Contact
</a>

<br><br>

ZEUS:
<a href="https://wa.me/2349066760078" target="_blank">
Contact
</a>

<br><br>

NICKY TECH:
<a href="https://wa.me/2347032201835" target="_blank">
Contact
</a>
`;

}

else if(text.includes("status")){

reply =
"Status feature coming soon ⚡";

}

else if(text.includes("channels")){

reply =
"Channels system loading soon 🚀";

}

else{

reply =
"TERMINAL X received your message ⚡";

}

// ===============================
// BOT MESSAGE
// ===============================

messages.insertAdjacentHTML(

"beforeend",

`

<div class="message bot-message">

<div
class="message-text"
id="botTyping">

</div>

</div>

`

);

// TYPE EFFECT

const botTyping =

document.getElementById(
"botTyping"
);

typeText(botTyping,reply);

scrollBottom();

}

// ===============================
// SEND MESSAGE
// ===============================

function sendMessage(){

const text =
input.value.trim();

if(text === "") return;

// ===============================
// USER MESSAGE
// ===============================

messages.insertAdjacentHTML(

"beforeend",

`

<div class="message user-message">

<div class="message-text">

${text}

</div>

</div>

`

);

saveChat();

scrollBottom();

// CLEAR INPUT

input.value = "";

// ===============================
// BOT LOADING
// ===============================

setTimeout(() => {

botReply(text);

},600);

}

// ===============================
// BUTTON CLICK
// ===============================

sendBtn.addEventListener(

"click",

sendMessage

);

// ===============================
// ENTER KEY
// ===============================

input.addEventListener(

"keypress",

function(e){

if(e.key === "Enter"){

sendMessage();

}

}

);

// ===============================
// ONLINE STATUS
// ===============================

console.log(
"TERMINAL X ONLINE ⚡"
);
