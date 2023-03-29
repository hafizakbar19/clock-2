// function updateClock() {
//     var clock = document.getElementById("clock");
//     var date = new Date();
//     var time = date.toLocaleTimeString();
//     clock.textContent = time;
//   }
  
//   setInterval(updateClock, 1000);
  


function updateClock() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let meridiem = hours < 12 ? "AM" : "PM";

    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    let timeString = hours + ":" + minutes + ":" + seconds + " " + meridiem;
    document.getElementById("clock").innerHTML = timeString;
}

setInterval(updateClock, 1000);
