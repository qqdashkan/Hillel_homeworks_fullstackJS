import { defaultTime as value } from "./constants.js";

const startBtn = document.querySelector('.start-btn');
const resetBtn = document.querySelector('.reset-btn');
const pauseBtn = document.querySelector('.pause-btn');
const editBtn = document.querySelector('.edit-btn');

const progressElement = document.querySelector('.progress-bar');

const hoursValueInput = document.querySelector('.hrs');
const minutesValueInput = document.querySelector('.mins');
const secondsValueInput = document.querySelector('.secs');

const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

const modal = document.querySelector('.modal');
const removeBtn = document.querySelector('.remove-btn');
const submitBtn = document.querySelector('.ok');

startBtn.addEventListener('click', function() {
    editBtn.disabled = true;
    editBtn.style.backgroundColor = '#474747';
    editBtn.style.boxShadow = '0px 6px 0px #474747';
    editBtn.style.color = '#B2BEB5';
    editBtn.style.border = '1px solid #818589';

    const time = ((hoursValueInput.value * 60 * 60) + (minutesValueInput.value * 60) + secondsValueInput.value) * 1000;
    barProgress(time);

        //clearInterval(interval);

        const interval = setInterval(startTimer, 1000);

        resetBtn.addEventListener('click', setTimer);

        pauseBtn.addEventListener('click', function() {
            clearInterval(interval);
            editBtn.disabled = false;
            editBtn.style.backgroundColor = '#e67e22';
            editBtn.style.boxShadow = '0px 6px 0px #d35400';
            editBtn.style.color = '#ecf0f1';
            editBtn.style.border = '1px solid #f39c12';
        });
});

editBtn.addEventListener('click', openModalWindow);

resetBtn.addEventListener('click', setTimer);

function openModalWindow() {
    modal.style.display = "block";

    submitBtn.addEventListener('click', setTimer);

    removeBtn.addEventListener('click', function() {
        modal.style.display = "none";
    });
};

function setTimer() {
    //clearInterval(interval);

    if (hoursValueInput.value, minutesValueInput.value, secondsValueInput.value) {
        if (+hoursValueInput.value >= 0 && +minutesValueInput.value >= 0 && +secondsValueInput.value >= 0) {
            hours.innerHTML = +hoursValueInput.value < 10 ? '0' + hoursValueInput.value : +hoursValueInput.value;
            minutes.innerHTML = +minutesValueInput.value < 10 ? '0' + minutesValueInput.value : +minutesValueInput.value;
            seconds.innerHTML = +secondsValueInput.value < 10 ? '0' + secondsValueInput.value : +secondsValueInput.value;
        }
        else {
            alert('error');
            hoursValueInput.value = 0;
            minutesValueInput.value = defaultTime;
            secondsValueInput.value = 0;
        }
    } else {
        hours.innerHTML = '00';
        minutes.innerHTML = value;
        seconds.innerHTML = '00';
    };
};

function barProgress(time) {
    const progressElement = document.querySelector('.progress-bar');
    let start = 0;
    const increment = 100 / (time / 1000);
    console.log(progressElement.value);
        const bar = setInterval(function() {
            if (start > 100) {
                clearInterval(bar);
            } 
            progressElement.value = start;
            start+=increment;
        }, 1000);
};

function startTimer() {
    let secs = +seconds.innerHTML;
    let mins = +minutes.innerHTML;
    let hrs = +hours.innerHTML;

    if(secs === 0) {
        if(mins === 0) {
            if(hrs === 0) {
                return;
            }
        }
    }

    secs--;
    //SECONDS
    if (secs < 10) {
        seconds.innerHTML = '0' + secs;
    }

    if (secs > 9) {
        seconds.innerHTML = secs;
    }

    if (secs < 0) {
        mins--;
        minutes.innerHTML = '0' + mins;
        secs = 59;
        seconds.innerHTML = secs;
    }

    //MINUTES
    if (mins < 10) {
        minutes.innerHTML = '0' + mins;
    }

    if (mins > 9) {
        minutes.innerHTML = mins;
    }

    if (mins < 0) {
        hrs--;
        hours.innerHTML = '0' + hrs;
        mins = 59;
        minutes.innerHTML = mins;
        secs = 59;
        seconds.innerHTML = secs;
    }

    //HOURS
    if (hrs < 10) {
        hours.innerHTML = '0' + hrs;
    }

    if (hrs > 9) {
        hours.innerHTML = hrs;
    }

    if (hrs < 0) {
        hours.innerHTML = '0' + 0;
        mins--;
        minutes.innerHTML = '0' + mins;
        secs = 59;
        seconds.innerHTML = secs;
    }
}


