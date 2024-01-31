score = 0;
cross = true;

audiogo = new Audio('gameover.mp3');
audio = new Audio('music.mp3');

// audio.play();
setTimeout(() => {
    audio.play();
}, 100);

document.onkeydown = function (e) {
    // console.log("Key code is: ", e.keyCode);
    if (e.keyCode == 38) {
        kid = document.querySelector('.kid');
        kid.classList.add('animateKid');
        setTimeout(() => {
            kid.classList.remove('animateKid')
        }, 700);
    }
    if (e.keyCode == 39) {
        kid = document.querySelector('.kid');
        kidX = parseInt(window.getComputedStyle(kid, null).getPropertyValue('left'));
        kid.style.left = (kidX + 112) + "px";
    }
    if (e.keyCode == 37) {
        kid = document.querySelector('.kid');
        kidX = parseInt(window.getComputedStyle(kid, null).getPropertyValue('left'));
        kid.style.left = (kidX - 112) + "px";
    }
}

setInterval(() => {
    kid = document.querySelector('.kid');
    gameOver = document.querySelector('.gameOver');
    zombie = document.querySelector('.zombie');

    dx = parseInt(window.getComputedStyle(kid, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(kid, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(zombie, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(zombie, null).getPropertyValue('top'));

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);
    // console.log(offsetX, offsetY);

    if (offsetX < 113 && offsetY < 52) {
        gameOver.innerHTML = " Game Over - Reload to Play Again"
        zombie.classList.remove('zombieAni');
        audiogo.play();
        setTimeout(() => {
            audiogo.pause();
            audio.pause();
        }, 1000);
    } else if (offsetX < 145 && cross) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);

        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(zombie, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.2;
            zombie.style.animationDuration = newDur + "s";
        }, 500);


    }
}, 10);


function updateScore(score) {
    scoreCont.innerHTML = " Your Score: " + score;
}