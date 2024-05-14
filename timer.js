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

document.addEventListener('DOMContentLoaded', function () {
    startBtn.disabled = true;
    startBtn.classList.remove('on');
    startBtn.classList.add('off');
})

startBtn.addEventListener('click', function() {
    editBtn.disabled = true;
    editBtn.classList.add('off');
    editBtn.classList.remove('on');

    const startValue = progressElement.value;
    const time = ((hoursValueInput.value * 60 * 60) + (minutesValueInput.value * 60) + (secondsValueInput.value - 1)) * 1000;
    barProgress(time, startValue);

        //clearInterval(interval);

        const interval = setInterval(startTimer, 1000);

        resetBtn.addEventListener('click', setTimer);

        pauseBtn.addEventListener('click', function() {
            clearInterval(interval);
            editBtn.disabled = false;
            editBtn.classList.remove('off');
            editBtn.classList.add('on');
        });
});

editBtn.addEventListener('click', openModalWindow);

resetBtn.addEventListener('click', setTimer);

function openModalWindow() {
    modal.style.display = "block";
    startBtn.disabled = false;
    startBtn.classList.remove('off');
    startBtn.classList.add('on');

    submitBtn.addEventListener('click', setTimer);

    removeBtn.addEventListener('click', function() {
        modal.style.display = "none";
    });
};

function setTimer() {
    //clearInterval(interval);
    progressElement.value = 0;
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

function barProgress(time, startValue) {
    let start = startValue;
    const increment = 100 / (time / 1000);
        const bar = setInterval(function() {
            if (start > 100) {
                clearInterval(bar);
            } 
            progressElement.value = Math.floor(start);
            start+=increment;
        }, 1000);

        pauseBtn.addEventListener('click', function () {
            clearInterval(bar);
        })
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


