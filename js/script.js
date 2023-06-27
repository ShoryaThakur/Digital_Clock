var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var ampmEL = document.getElementById("ampm");

function updateclock() {
  var h = new Date().getHours();
  var m = new Date().getMinutes();
  var s = new Date().getSeconds();
  var ampm = "AM";
  if (h > 12) {
    h = h - 12;
    ampm = "PM";
  }
  if (h < 10) {
    h = "0" + h;
  } else h = h;
  if (m < 10) {
    m = "0" + m;
  } else m = m;
  if (s < 10) {
    s = "0" + s;
  } else s = s;

  
  hours.innerText = h;
  minutes.innerText = m;
  seconds.innerText = s;
  ampmEL.innerText = ampm;
  setTimeout(() => {
    updateclock();
  }, 1000);
}
updateclock();
