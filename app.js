let gameSeq = [];
let userSeq = [];


let btns = ["tomato", "orange", "skyblue", "darkblue"];
let started = false;
let level = 0;
let highestScore = 0;

let h2 = document.querySelector("h2");
let highestScoreSpan = document.getElementById("highest-score");
// Game first step(STEP 1) = press the key , start the game...
document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game started");
        started = true;
        levelUp();
    }
});
function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 150);
}
function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 150);
}
// STEP 2, flash random button- level update
function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);

    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);

}
function checkAns(idx) {
    // console.log(`current level: ${level}`);
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerHTML = `Game Over!Your final score was  ${level}</br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);

        if (level > highestScore) {
            highestScore = level;
            highestScoreSpan.innerHTML = `Your Highest Score is ${highestScore}`;
        }
        reset();
    }
}
function btnPress() {
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);

}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;

}
