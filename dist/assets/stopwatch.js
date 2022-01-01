

function startWatch(){
    setInterval(timer, 1000);
    let hours = new getHours();
    let minutes = new getMinutes();
    let seconds = new getSeconds();

    function timer(){
        document.getElementById("hoursWatch").innerHTML = hours.getHours();
        document.getElementById("minutesWatch").innerHTML = minutes.getMinutes();
        document.getElementById("secondsWatch").innerHTML = seconds.getSeconds();
        document.getElementById("secondsWatch").innerHTML = setInterval.toLocaleTimeString();
    }
}