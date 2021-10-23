const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secsEl = document.getElementById('secs');

const happyHalloween = ' 31 Oct 2021';

function countdown()
{
    const happyHalloweenDate = new Date(happyHalloween);
    const currentDate = new Date();

    const totalSecs = new Date(happyHalloweenDate - currentDate) / 1000;

    const days = Math.floor(totalSecs / 3600 / 24);

    const hours = Math.floor(totalSecs / 3600) % 24;

    const minutes = Math.floor(totalSecs / 60) % 60;

    const seconds = Math.floor(totalSecs) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minsEl.innerHTML = minutes;
    secsEl.innerHTML = seconds;
    
}


countdown();


setInterval(countdown, 1000);