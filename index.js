const secEl = document.getElementById("seconds");
const minEl = document.getElementById("minutes");
const hoursEl = document.getElementById("hours");


setInterval(() => {
    setTime();
    setAmPm();
}, 1000)

function setTime() {
    const date = new Date();
    let curSec = date.getSeconds();
    let curMin = date.getMinutes();
    let curHours = date.getHours() % 12;

    secEl.innerHTML = doubleDigit(curSec);
    minEl.innerHTML = doubleDigit(curMin);
    hoursEl.innerHTML = doubleDigit(curHours);
}

function setAmPm() {
    const date = new Date();
    let am_pm = date.getHours() >= 12 ? "pm" : "am";
    const amEl = document.querySelector(".am");
    const pmEl = document.querySelector(".pm");

    if (am_pm === 'am') {
        amEl.classList.add("active");
        pmEl.classList.remove("active");
    }
    else {
        amEl.classList.remove("active");
        pmEl.classList.add("active");
    }
}

function doubleDigit(time) {
    return time < 10 ? "0" + time : time;
}