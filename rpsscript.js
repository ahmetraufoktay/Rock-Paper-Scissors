const imageYou = document.getElementById('imageyou');
const imageCPU = document.getElementById('imagecpu');

const scoreYou = document.getElementById('youscore');
const scoreCPU = document.getElementById('cpuscore');

const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');

const buttons = document.querySelectorAll('.option');

//imageCPU.src = 'images/rockcpu.jpg';

function randomnumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// 0-> rock 1-> paper 2-> scissors
function checkforwin(x,y) {
    switch(x) {
        case 0:
            switch(y) {
                case 0:
                    return null;
                case 1:
                    return false;
                case 2:
                    return true;
            }
        case 1:
            switch(y) {
                case 0:
                    return true;
                case 1:
                    return null;
                case 2:
                    return false;
            }
        case 2:
            switch(y) {
                case 0:
                    return false;
                case 1:
                    return true;
                case 2:
                    return null;
            }
    }
}
function changeImage(x,player) {
    if (player == 'cpu') {
        switch (x) {
            case 0:
                imageCPU.src = 'images/rockcpu.jpg';
                break;
            case 1:
                imageCPU.src = 'images/papercpu.jpg';
                break;
            case 2:
                imageCPU.src = 'images/scissorscpu.jpg';
                break;
        }
    } else if (player == 'user') {
        switch (x) {
            case 0:
                imageYou.src = 'images/rock.jpg';
                break;
            case 1:
                imageYou.src = 'images/paper.jpg';
                break;
            case 2:
                imageYou.src = 'images/scissors.jpg';
                break;
        }
    }
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const userChoice = parseInt(button.dataset.value, 10);
        const cpuChoice = randomnumber(0,2);
        let cpu = scoreCPU.textContent;
        let you = scoreYou.textContent;
        changeImage(userChoice,'user');
        changeImage(cpuChoice,'cpu');
        console.log(userChoice);
        console.log(cpuChoice);
        let result = checkforwin(userChoice,cpuChoice);
        switch (result) {
            case true:
                you++;
                break;
            case false:
                cpu++;
                break;
            case null:
                alert('Tie');
                break;
        }
        scoreCPU.innerHTML = cpu;
        scoreYou.innerHTML = you;
    });
  });
// The END Voila

