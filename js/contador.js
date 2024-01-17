const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const demodayDate = "19 Dec 2023";

function temporizador(){

    const demoday = new Date(demodayDate);
    const currentsDate = new Date();
    
    const totalSeconds = (demoday - currentsDate) / 1000;

    const days = 0;
    const hours = 0;
    const mins= 0;
    const seconds = 0;


    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);  
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);


}

 
function formatTime(time){
    return time < 10 ? `0${time}` : time;

}

temporizador();

setInterval(temporizador, 1000);