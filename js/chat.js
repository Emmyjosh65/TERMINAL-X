function sendMessage() {
    const input = document.getElementById("messageInput");
    const messages = document.getElementById("messages");

    if(input.value.trim() !== ""){

        const msg = document.createElement("div");
        msg.classList.add("message");
        msg.innerText = input.value;

        messages.appendChild(msg);

        input.value = "";

        messages.scrollTop = messages.scrollHeight;
    }
}
// LOAD USERS
function loadUsers(){

    const users = [
        {
            name:"Daniel",
            number:"+2349011111111"
        },

        {
            name:"Jessica",
            number:"+2349022222222"
        },

        {
            name:"Michael",
            number:"+2349033333333"
        }
    ];

    const usersList = document.getElementById("usersList");

    users.forEach(user => {

        const div = document.createElement("div");

        div.classList.add("user");

        div.innerHTML = `
            <strong>Name:</strong> ${user.name}<br>
            <strong>Number:</strong> ${user.number}
        `;

        usersList.appendChild(div);

    });

}


// LOAD COMPLAINTS
function loadComplaints(){

    const complaints = [

        {
            user:"Daniel",
            message:"Messages not sending"
        },

        {
            user:"Jessica",
            message:"Account login problem"
        },

        {
            user:"Michael",
            message:"Profile picture not uploading"
        }

    ];

    const complaintsList =
    document.getElementById("complaintsList");

    complaints.forEach(c => {

        const div = document.createElement("div");

        div.classList.add("complaint");

        div.innerHTML = `
            <strong>User:</strong> ${c.user}<br>
            <strong>Complaint:</strong> ${c.message}
        `;

        complaintsList.appendChild(div);

    });

}
