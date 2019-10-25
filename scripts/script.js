let sessionTimerDown = document.querySelector('.session-timer-down');
let sessionText = document.querySelector('.session span');
let timerText = document.querySelector('.display span');

sessionTimerDown.addEventListener(('click'), () => {
    if (sessionText.innerText > Number('1')) {
        sessionText.innerText = Number(sessionText.innerText) - 1;
        timerText.innerText = sessionText.innerText + ":00";
    } else {
        sessionText.innerText = Number(1);
        timerText.innerText = sessionText.innerText + ":00";    
    }
});

let sessionTimerUp = document.querySelector('.session-timer-up');
sessionTimerUp.addEventListener(('click'), () => {
    if (sessionText.innerText < Number('60')) {
        sessionText.innerText = Number(sessionText.innerText) + 1;
        timerText.innerText = sessionText.innerText + ":00";
    }
});

let breakTimerDown = document.querySelector('.break-timer-down');
let breakText = document.querySelector('.break span');

breakTimerDown.addEventListener(('click'), () => {
    if (breakText.innerText > Number('1')) {
        breakText.innerText = Number(breakText.innerText) - 1;
    } else {
        breakText.innerText = Number(1);
    }
});

let breakTimerUp = document.querySelector('.break-timer-up');
breakTimerUp.addEventListener(('click'), () => {
    if (breakText.innerText < Number('60')) {
        breakText.innerText = Number(breakText.innerText) + 1;
    }
});


