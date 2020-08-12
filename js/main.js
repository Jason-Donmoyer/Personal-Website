const body = document.querySelector('body');

// Clock Functions

function getStartTime() {
  var today = new Date();
  var hour = today.getHours();
  var minutes = today.getMinutes();
  var seconds = today.getSeconds();
  var mornOrNoon = amOrPm(hour);
  hour = checkCurrentTime(checkCurrentHour(hour));
  minutes = checkCurrentTime(minutes);
  seconds = checkCurrentTime(seconds);


  document.querySelector('#clock').innerHTML = hour + ':' + minutes + ':' + seconds + mornOrNoon;
  setTimeout(getStartTime, 500);

  changeBackgroundImage(hour);

}

// check if past noon

function checkCurrentHour(index) {
  if (index > 12) {
    index -= 12;
  }
  return index;
}

// adds zeros to single digits

function checkCurrentTime(index) {
  if (index < 10) {
    index = "0" + index;
  }
  return index;
}

// displays am or pm

function amOrPm(hour) {
  if (hour >= 12) {
    mornOrNoon = 'pm';
  } else {
    mornOrNoon = 'am';
  }
  return mornOrNoon;
}


// Change Background Function

const mainBackground = document.querySelector('main');

function changeBackgroundImage(hour) {
  if (hour > 17 || hour < 5) {
    mainBackground.style.backgroundImage = 'url(images/dark_ocean_view.jpg)';
    mainBackground.style.color = '#FFF';
  }
}