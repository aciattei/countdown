const countdown = () => {
    const countDate = new Date("September 12, 2022 17:00:00 GMT+01:00").getTime();
    const currentTime = new Date().getTime();
    const gap = countDate - currentTime;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const missingDays = Math.floor(gap / day);
    const missingHours = Math.floor((gap % day) / hour);
    const missingMinutes = Math.floor((gap % hour) / minute);
    const missingSeconds = Math.floor((gap % minute) / second);

    document.querySelector('.day').innerText = missingDays;
    document.querySelector('.hour').innerText = missingHours;
    document.querySelector('.minute').innerText = missingMinutes;
    document.querySelector('.second').innerText = missingSeconds;

    const timer = document.querySelector('.countdown');
    if(gap <= 0 ) {
        timer.remove();
    }
};

//Updates the function every second

setInterval(countdown, 1000);