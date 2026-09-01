// ===============================
// START EXPERIENCE
// ===============================

const startBtn = document.getElementById("startBtn");
const intro = document.getElementById("intro");
const mainContent = document.getElementById("mainContent");

startBtn.addEventListener("click", () => {
    intro.style.display = "none";
    mainContent.classList.remove("hidden");

    createHearts(15);

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// ===============================
// SMOOTH SCROLL
// ===============================

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}


// ===============================
// RUNAWAY "NO" BUTTON 😂
// ===============================

const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const answerMessage = document.getElementById("answerMessage");

noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);
noBtn.addEventListener("click", moveNoButton);

function moveNoButton() {
    const padding = 20;

    const maxX = Math.max(
        padding,
        window.innerWidth - noBtn.offsetWidth - padding
    );

    const maxY = Math.max(
        padding,
        window.innerHeight - noBtn.offsetHeight - padding
    );

    const x = padding + Math.random() * (maxX - padding);
    const y = padding + Math.random() * (maxY - padding);

    noBtn.style.position = "fixed";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

yesBtn.addEventListener("click", () => {
    answerMessage.innerHTML = "I KNEW IT! 😌❤️ I love you too.";
    createHearts(35);

    yesBtn.innerHTML = "YES FOREVER ❤️";
});


// ===============================
// LOVE LETTER
// ===============================

const letterBtn = document.getElementById("letterBtn");
const letterText = document.getElementById("letterText");

const message = `
Six years ago, we started this crazy little journey together.

Since then, we've laughed, fought, annoyed each other,
made memories, and somehow kept choosing each other.

There are so many things I could say,
but the simplest one is probably the most important:

I'm really glad it's you.

Thank you for these six beautiful years.

And if I had to choose again...

I'd still choose you. ❤️
`;

let letterStarted = false;

letterBtn.addEventListener("click", () => {
    if (letterStarted) return;

    letterStarted = true;
    letterBtn.style.display = "none";

    let index = 0;

    function typeLetter() {
        if (index < message.length) {
            letterText.innerHTML +=
                message[index] === "\n"
                    ? "<br>"
                    : message[index];

            index++;
            setTimeout(typeLetter, 25);
        }
    }

    typeLetter();
});


// ===============================
// FLOATING HEARTS
// ===============================

function createHeart() {
    const heart = document.createElement("div");

    heart.classList.add("heart");

    const heartTypes = ["❤️", "💕", "💗", "💖", "💘"];
    heart.innerHTML =
        heartTypes[Math.floor(Math.random() * heartTypes.length)];

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize =
        15 + Math.random() * 25 + "px";

    heart.style.animationDuration =
        4 + Math.random() * 4 + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}

function createHearts(amount = 10) {
    for (let i = 0; i < amount; i++) {
        setTimeout(() => {
            createHeart();
        }, i * 120);
    }
}


// Keep occasional hearts floating

setInterval(() => {
    if (!mainContent.classList.contains("hidden")) {
        createHeart();
    }
}, 1200);
