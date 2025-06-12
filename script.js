document.addEventListener("DOMContentLoaded", function () {
    const chatInput = document.querySelector("#chat-input");
    const chatButton = document.querySelector("#chat-send");
    const chatBox = document.querySelector("#chat-box");

    const faq = {
        "hi" : "Hello! How can i help you?",
        "hey" : "Hello! How can i help you?",
        "what is whatsapp": "WhatsApp is a free messaging app used to send texts, voice messages, make calls, and share media. We teach how to use it in our tutorial.",
        "how to send message on whatsapp": "Open WhatsApp, select a contact, type your message, and press the send button (paper plane icon).",
        "how to make call on whatsapp": "Tap the call icon on a contact chat to make a voice or video call.",
        "what is paytm": "Paytm is a digital wallet for making online payments. Our tutorial explains how to add money, send money, and pay bills.",
        "how to use whatsapp" : "You can get full tutorial on how to use whatsapp with step-by-step guide.Check our whatsapp tutorial",
        "how to pay using paytm": "Open Paytm, select 'Pay', scan a QR code or enter mobile number, and confirm payment.",
        "how to use paytm" : "You can get full tutorial on how to use paytm with step-by-step guide.Check our paytm tutorial",
        "how to use google maps": "Google Maps helps you find places and directions. Search for a location, tap 'Directions', and choose your mode of travel.",
        "how to use google maps" : "You can get full tutorial on how to use google maps with step-by-step guide.Check our google maps tutorial",
        "how to find nearest atm on google maps": "Open Google Maps, type 'ATM near me' in the search bar, and you'll see nearby ATMs on the map."
    };

    chatButton.addEventListener("click", () => {
        const userMsg = chatInput.value.trim().toLowerCase();
        if (userMsg) {
            addMessage("You", userMsg);
            setTimeout(() => {
                botReply(userMsg);
            }, 800);
            chatInput.value = "";
        }
    });

    function addMessage(sender, text) {
        const msg = document.createElement("div");
        msg.classList.add("p-2", "my-2", "rounded", "bg-light", "text-start");
        msg.innerHTML = `<strong>${sender}:</strong> ${text}`;
        chatBox.appendChild(msg);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function botReply(userMsg) {
        let response = "Sorry, I don't understand. Try asking about WhatsApp, Paytm, or Google Maps.";
        for (let key in faq) {
            if (userMsg.includes(key)) {
                response = faq[key];
                break;
            }
        }
        addMessage("DigiBuddy", response);
    }
});

//Feedback 
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Thank you for your feedback!");
            form.reset();
        });
    }
});