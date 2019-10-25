let sessionTimerDown = document.querySelector('.session-timer-down');
let sessionText = document.querySelector('.session span');
let timerText = document.querySelector('.display span');

sessionTimerDown.addEventListener(('click'), sessionDown);

function sessionDown() {
    if (sessionText.innerText > Number('1')) {
        sessionText.innerText = Number(sessionText.innerText) - 1;
        timerText.innerText = sessionText.innerText + ":00";
    } else {
        sessionText.innerText = Number(1);
        timerText.innerText = sessionText.innerText + ":00";    
    }
}

let sessionTimerUp = document.querySelector('.session-timer-up');
sessionTimerUp.addEventListener(('click'), sessionUp);

function sessionUp() {
    if (sessionText.innerText < Number('60')) {
        sessionText.innerText = Number(sessionText.innerText) + 1;
        timerText.innerText = sessionText.innerText + ":00";
    }
}

let breakTimerDown = document.querySelector('.break-timer-down');
let breakText = document.querySelector('.break span');

breakTimerDown.addEventListener(('click'), breakDown);

function breakDown() {
    if (breakText.innerText > Number('1')) {
        breakText.innerText = Number(breakText.innerText) - 1;
    } else {
        breakText.innerText = Number(1);
    }
}

let breakTimerUp = document.querySelector('.break-timer-up');
breakTimerUp.addEventListener(('click'), breakUp);

function breakUp() {
    if (breakText.innerText < Number('60')) {
        breakText.innerText = Number(breakText.innerText) + 1;
    }
}


let playButton = document.querySelector('.playButton');
let min;
let sec;
let timer;
let timerMode = "session";
let timerOn;
let once = {
    once: true
};
let timerTitle = document.querySelector('.display h2');


playButton.addEventListener(('click'), playTimer, once);
function playTimer() {
    timer = timerText.textContent; // "25:00"
    min = timer.slice(0, timer.indexOf(":")); //"25"
    sec = timer.slice(timer.indexOf(":") + 1); //"00"
    timerOn = setInterval(function() {
        if (min == "0" && sec == "00") {
            if (timerMode == "session") {
                timerMode = "break";
                min = breakText.innerText;
                sec = "00";
                timerText.innerText = min + ":" + sec;
                timerTitle.innerText = "Break" 
            } else if (timerMode == "break") {
                timerMode = "session";
                min = sessionText.innerText;
                sec = "00";
                timerText.innerText = min + ":" + sec;
                timerTitle.innerText = "Session";
            } 
        } else if (sec == "00") {
            sec = "59";
            min--;
        } else {
            sec--;
        }
        sessionTimerUp.removeEventListener(('click'), sessionUp);
        sessionTimerDown.removeEventListener(('click'), sessionDown);
        breakTimerUp.removeEventListener(('click'), breakUp);
        breakTimerDown.removeEventListener(('click'), breakDown);

        timerText.innerText = min + ":" + sec;
    }, 1000);
}

let pauseButton = document.querySelector('.pauseButton');
pauseButton.addEventListener(('click'), () => {
    clearInterval(timerOn);
    playButton.addEventListener(('click'), playTimer, once);
});

let stopButton = document.querySelector('.stopButton');
stopButton.addEventListener(('click'), () => {
    if (timerMode == "session") {
        min = sessionText.innerText;
        sec = "00";
        timerText.innerText = min + ":" + sec;
    } else if (timerMode == "break") {
        timerMode = "session";
        min = sessionText.innerText;
        sec = "00";
        timerText.innerText = min + ":" + sec;
        timerTitle.innerText = "Session";
    } 
    clearInterval(timerOn);
    playButton.addEventListener(('click'), playTimer, once);
    sessionTimerUp.addEventListener(('click'), sessionUp);
    sessionTimerDown.addEventListener(('click'), sessionDown);
    breakTimerUp.addEventListener(('click'), breakUp);
    breakTimerDown.addEventListener(('click'), breakDown);
});

let refreshButton = document.querySelector('.refreshButton');
refreshButton.addEventListener(('click'), () => {
    sessionText.innerText = "25";
    breakText.innerText = "5";
    timerText.innerText = sessionText.innerText + ":00";
    timerTitle.innerText = "Session";
    clearInterval(timerOn);
    playButton.addEventListener(('click'), playTimer, once);
    sessionTimerUp.addEventListener(('click'), sessionUp);
    sessionTimerDown.addEventListener(('click'), sessionDown);
    breakTimerUp.addEventListener(('click'), breakUp);
    breakTimerDown.addEventListener(('click'), breakDown);
});