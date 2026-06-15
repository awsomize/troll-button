const btn = document.getElementById("trollBtn");
const counter = document.getElementById("counter");
const msg = document.getElementById("msg");

let fails = 0;
let speed = 1;

const messages = [
    "CMON COME HERE",
    "TOO SLOW ",
    "SKILL ISSUE 😭🙏",
    "BRO WHAT ",
    "ALMOST 👏",
    "YOU CAN DO THIS",
    "PROVE YOUR FAST"
    
];

function moveButton(){
    const maxX = window.innerWidth - btn.offsetWidth;
    const maxY = window.innerHeight - btn.offsetHeight;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    btn.style.left = x + "px";
    btn.style.top = y + "px";
}

function spawnText(text){
    const el = document.createElement("div");
    el.className = "float";
    el.textContent = text;

    el.style.left = Math.random() * window.innerWidth + "px";
    el.style.top = Math.random() * window.innerHeight + "px";

    document.body.appendChild(el);

    setTimeout(() => el.remove(), 1200);
}

function getMessage(){
    if (fails > 25) return "PROVE IF YOUR BIG ";
    if (fails > 15) return "CMON COME HERE";
    return messages[Math.floor(Math.random() * messages.length)];
}

// 🧠 MAIN TRICK
btn.addEventListener("mouseenter", () => {

    fails++;
    counter.textContent = "Failed Clicks: " + fails;

    speed += 0.15;

    moveButton();

    const text = getMessage();
    msg.textContent = text;

    spawnText(text);

    // extra teleport delay = pain
    setTimeout(moveButton, 200 / speed);

});

// 💀 rare win condition
btn.addEventListener("click", () => {
    alert("🏆 YOU DID IT... somehow");
});

// start position
moveButton();