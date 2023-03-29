function updateClock() {
    var clock = document.getElementById("clock");
    var date = new Date();
    var time = date.toLocaleTimeString();
    clock.textContent = time;
  }
  
  setInterval(updateClock, 1000);
  