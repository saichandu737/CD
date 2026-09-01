
// ===============================
// PREMIUM CRICKET SIX REVEAL
// ===============================

function playSixAnimation() {
    const overlay = document.getElementById("sixAnimation");
    if (!overlay) return;

    overlay.classList.remove("play");
    void overlay.offsetWidth;
    overlay.classList.add("play");

    // Keep the surprise short and cinematic.
    window.setTimeout(() => {
        overlay.classList.remove("play");
    }, 4800);
}

// ===============================
// START EXPERIENCE
// ===============================

const startBtn = document.getElementById("startBtn");
const intro = document.getElementById("intro");
const mainContent = document.getElementById("mainContent");

startBtn.addEventListener("click", () => {
    playSixAnimation();

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

Finally 6 years ayipoindiii ...may be 7th year ki manam kalisi celebrate cheskuntam emo Thala for a reason 7 ......

We are having bad days may be wrong time lo godavalu avutunnai i hope everthing will be fine from now ......It should.
I accept my mistake these are the areas which i need to control,emotional ga yadoo yadoo anisa 2 days back ......
i was feeling like i failed badly in relationship with you , epudu ki kuda koncham naku alane undi but it's okay everything will be fine , Sorry banagarammmmmmm 🫂

Now I am going to give reply to your 📬 which was sent on 25 June 🙈.

I am hoping you remember that mail.

It's not silyy Naku ayitee nachindiii interesting ga undii…

Even I really want to try that now…mana madhya chala ayavii few months nunchiii…so I thought it would be a great if we start again…it's not easy like fresh antey because we know each other now aa character nunchi bayataki vachii manam undali antey koncham kastam…..kani we have forget past things negative things, and start again….I think it would help a lot.btw which movie it is…neenu kuda chustaa adi… we will discuss more about it like yala start chestam yanti ani …kani call lo we will  laugh emo internally.

Let's celebrate this night and sacrifice the sleep for this spl day 🙈. Lvu so muchhhhhhhh , remember one thing bro eeroju neenu chestunnadu manakosam…naaku life lo antha asalu em levu kani with you manam mast ga njoy cheyali ani untadii…so had to work hard….eee madhya ala ayipotunna disciplined ga same nv kuda ala undali anukuntunna …untee baa unnu kani adi fair kadu neeku pressure cheyadam…I have to understand this .Take care of your health dpuuuuu…..Naku ee vishayam lo kopam vastadii aaaa kopam ala inkodagara impact untadii. Konni konni chuskoo health ela saree 😘😘😘😘, don't get irritated everytime cheptunna ani …workout start cheyali brooo malla …We had good chance today…neenu vastey baa unnu kani situation baledu 😔😔

Let's fuck tonight 🙈🙈🙈

Etlu ,

Nee Chinnu❤️
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
            setTimeout(typeLetter, 200);
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
