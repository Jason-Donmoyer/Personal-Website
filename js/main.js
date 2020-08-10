const body = document.querySelector('body');

// body.onload(getStartTime);
// Clock Functions


function getStartTime() {
  var today = new Date();
  var hour = today.getHours();
  var minutes = today.getMinutes();
  var seconds = today.getSeconds();
  hour = checkCurrentTime(checkCurrentHour(hour));
  minutes = checkCurrentTime(minutes);
  seconds = checkCurrentTime(seconds);

  document.querySelector('#clock').innerHTML = hour + ':' + minutes + ':' + seconds;
  var timeOut = setTimeout(getStartTime, 500);

}

function checkCurrentHour(index) {
  if (index > 12) {
    index -= 12;
  }
  return index;
}

function checkCurrentTime(index) {
  if (index < 10) {
    index = "0" + index;
  }
  return index;
}