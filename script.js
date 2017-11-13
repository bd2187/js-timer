var minutesReminderEl = document.querySelector(".minutes-reminder");
var minutesEl = document.querySelector(".minutes");
var secondsEl = document.querySelector(".seconds");

function timer(minutes) {
  displayStartTime(minutes);

  var seconds = 60;

  var updateTime = setInterval(function() {
    minutesEl.innerHTML = minutes - 1;

    if (seconds === 0) {
      seconds = 60;
      minutes -= 1;
      displayRemainingMinutes(minutes);
    }

    seconds -= 1;
    zeroCheck(seconds);

    if (minutes === 1 && seconds === 0) {
      minutesReminderEl.innerHTML = "Time is up!";
      clearInterval(updateTime);
    }
  }, 1000);
}

function displayStartTime(minutes) {
  minutesEl.innerHTML = minutes;
  secondsEl.innerHTML = "00";
  displayRemainingMinutes(minutes);
}

function zeroCheck(num) {
  return num < 10
    ? (secondsEl.innerHTML = "0" + num)
    : (secondsEl.innerHTML = num);
}

function displayRemainingMinutes(minutes) {
  return minutes === 1
    ? (minutesReminderEl.innerHTML = `You have ${minutes} minute left`)
    : (minutesReminderEl.innerHTML = `You have ${minutes} minutes left`);
}

timer(document.querySelector(".minutes").innerHTML);
