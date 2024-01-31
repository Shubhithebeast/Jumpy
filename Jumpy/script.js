let score = 0;
let cross = true;
let isGameOver = false;
let defaultZombieSpeed = 5; // Adjust this value as needed

let audiogo = new Audio('over.mp3');
let audio = new Audio('music.mp3');



document.onkeydown = function (e) {
    if (isGameOver) {
        resetGame();
        return;
    }

    if (e.keyCode == 38) {
        let kid = document.querySelector('.kid');
        kid.classList.add('animateKid');
        setTimeout(() => {
            kid.classList.remove('animateKid');
        }, 700);
    }
    if (e.keyCode == 39) {
        let kid = document.querySelector('.kid');
        let kidX = parseInt(window.getComputedStyle(kid, null).getPropertyValue('left'));
        if (kidX < window.innerWidth - 112) { // Check if kid is within the right boundary
            kid.style.left = (kidX + 112) + "px";
        }
    }
    if (e.keyCode == 37) {
        let kid = document.querySelector('.kid');
        let kidX = parseInt(window.getComputedStyle(kid, null).getPropertyValue('left'));
        if (kidX > 0) { // Check if kid is within the left boundary
            kid.style.left = (kidX - 112) + "px";
        }
    }
}

setInterval(() => {
    if (isGameOver) {
        return;
    }

    let kid = document.querySelector('.kid');
    let gameOver = document.querySelector('.gameOver');
    let zombie = document.querySelector('.zombie');

    let dx = parseInt(window.getComputedStyle(kid, null).getPropertyValue('left'));
    let dy = parseInt(window.getComputedStyle(kid, null).getPropertyValue('top'));

    let ox = parseInt(window.getComputedStyle(zombie, null).getPropertyValue('left'));
    let oy = parseInt(window.getComputedStyle(zombie, null).getPropertyValue('top'));

    let offsetX = Math.abs(dx - ox);
    let offsetY = Math.abs(dy - oy);

    if (offsetX < 113 && offsetY < 52) {
        gameOver.innerHTML = "Game Over - Press Any Key to Play Again";
        zombie.classList.remove('zombieAni');
        audiogo.play();
        audio.pause();
        isGameOver = true;
    } else if (offsetX < 145 && cross) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);

        setTimeout(() => {
            let aniDur = parseFloat(window.getComputedStyle(zombie, null).getPropertyValue('animation-duration'));
            let newDur = aniDur - 0.2;
            zombie.style.animationDuration = newDur + "s";
        }, 500);
    }
}, 10);
function updateScore(score) {
    let scoreCont = document.getElementById("scoreCont");
    scoreCont.innerHTML = "Your Score: " + score;
}

function resetGame() {
    score = 0;
    cross = true;
    isGameOver = false;
    audiogo.pause();
    audio.currentTime = 0;
    audio.play();
    document.querySelector('.gameOver').innerHTML = "Welcome to Jumpy";
    let zombie = document.querySelector('.zombie');
    zombie.classList.add('zombieAni');
    zombie.style.animationDuration = defaultZombieSpeed + "s"; // Reset zombie speed
    updateScore(score);
}



// score = 0;
// cross = true;

// audiogo = new Audio('gameover.mp3');
// audio = new Audio('music.mp3');

// // audio.play();
// setTimeout(() => {
//     audio.play();
// }, 100);

// document.onkeydown = function (e) {
//     // console.log("Key code is: ", e.keyCode);
//     if (e.keyCode == 38) {
//         kid = document.querySelector('.kid');
//         kid.classList.add('animateKid');
//         setTimeout(() => {
//             kid.classList.remove('animateKid')
//         }, 700);
//     }
//     if (e.keyCode == 39) {
//         kid = document.querySelector('.kid');
//         kidX = parseInt(window.getComputedStyle(kid, null).getPropertyValue('left'));
//         kid.style.left = (kidX + 112) + "px";
//     }
//     if (e.keyCode == 37) {
//         kid = document.querySelector('.kid');
//         kidX = parseInt(window.getComputedStyle(kid, null).getPropertyValue('left'));
//         kid.style.left = (kidX - 112) + "px";
//     }
// }

// setInterval(() => {
//     kid = document.querySelector('.kid');
//     gameOver = document.querySelector('.gameOver');
//     zombie = document.querySelector('.zombie');

//     dx = parseInt(window.getComputedStyle(kid, null).getPropertyValue('left'));
//     dy = parseInt(window.getComputedStyle(kid, null).getPropertyValue('top'));

//     ox = parseInt(window.getComputedStyle(zombie, null).getPropertyValue('left'));
//     oy = parseInt(window.getComputedStyle(zombie, null).getPropertyValue('top'));

//     offsetX = Math.abs(dx - ox);
//     offsetY = Math.abs(dy - oy);2
//     // console.log(offsetX, offsetY);

//     if (offsetX < 113 && offsetY < 52) {
//         gameOver.innerHTML = " Game Over - Reload to Play Again"
//         zombie.classList.remove('zombieAni');
//         audiogo.play();
//         setTimeout(() => {
//             audiogo.pause();
//             audio.pause();
//         }, 1000);
//     } else if (offsetX < 145 && cross) {
//         score += 1;
//         updateScore(score);
//         cross = false;
//         setTimeout(() => {
//             cross = true;
//         }, 1000);

//         setTimeout(() => {
//             aniDur = parseFloat(window.getComputedStyle(zombie, null).getPropertyValue('animation-duration'));
//             newDur = aniDur - 0.2;
//             zombie.style.animationDuration = newDur + "s";
//         }, 500);


//     }
// }, 10);


// function updateScore(score) {
//     scoreCont.innerHTML = " Your Score: " + score;
// }