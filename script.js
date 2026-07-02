function toggleChat() {
    const chat = document.getElementById("chatbot");
    chat.style.display = chat.style.display === "flex" ? "none" : "flex";
}

function sendMessage() {
    const input = document.getElementById("userInput");
    const message = input.value.trim();
    if (message === "") return;

    const chatBody = document.getElementById("chatBody");

    // User message
    const userMsg = document.createElement("div");
    userMsg.className = "user";
    userMsg.innerText = message;
    chatBody.appendChild(userMsg);

    input.value = "";

    // Bot reply
    setTimeout(() => {
        const botMsg = document.createElement("div");
        botMsg.className = "bot";
        botMsg.innerText = getBotReply(message);
        chatBody.appendChild(botMsg);
        chatBody.scrollTop = chatBody.scrollHeight;
    }, 500);
}

function getBotReply(msg) {
    msg = msg.toLowerCase();

    if (msg.includes("hello")) return "Hi there! 👋";
    if (msg.includes("help")) return "Sure! Tell me what you need.";
    if (msg.includes("price")) return "Please check product details for prices.";
    if (msg.includes("bye")) return "Goodbye! Have a nice day 😊";
    if (msg.includes("product is late")) return "we are trying to deliver fast";
    if (msg.includes("i want to contact you")) return "Yes you can, this is my number 9260988629";
if (msg.includes("work ")) return "we are doing your work 😊";
    return "I'm learning 🤖. Please try something else!";
}