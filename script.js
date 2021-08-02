//Variables//

let winningScore = 10;
const resetButton = document.querySelector('#reset');
let isGameOver = false;

const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}
const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}


//Game Functions//

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('winner');
            opponent.display.classList.add('loser');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}


//Event Listeners//

p1.button.addEventListener('click', function () {
    updateScores(p1, p2)
})
p2.button.addEventListener('click', function () {
    updateScores(p2, p1)
})


resetButton.addEventListener('click', reset)


//RESET Function//

function reset() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('winner', 'loser');
        p.button.disabled = false;
    }
}




//CLOCK FUNCTION
function theTime() {

    const today = new Date()

    const time = ("0" + today.getHours()).slice(-2) + ":" + ("0" + today.getMinutes()).slice(-2) + ":" + ("0" + today.getSeconds()).slice(-2)

    document.querySelector('.timer').innerHTML = time;

    const t = setTimeout(theTime, 1000);
}

theTime()

//MESSAGE FUNCTION
const message = document.querySelector(".message")

function showMessage() {
    const date = new Date();
    let current = date.getHours();
    let boxmsg;

    if (current >= 17 && current <= 23) {
        boxmsg = "Good Evening"

    } else if (current >= 12 && current <= 16) {
        boxmsg = "Good Afternoon"

    } else if (current >= 0 && current <= 11) {
        boxmsg = "Good Morning"

    } else {
        boxmsg = "Something is not working correctly"
    }

    message.innerHTML = `${boxmsg}`


}

showMessage()