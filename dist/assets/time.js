// Time Javascript

setInterval(timer, 1000);

function timer(){
const currentDate = new Date();
const currentDateTimer = currentDate.toLocaleTimeString();
    document.getElementById("time").innerHTML = currentDateTimer;
}