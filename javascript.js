let timer;
let minutesInput = document.getElementById('minutes');
let secondsInput = document.getElementById('seconds');
let timerDisplay = document.getElementById('timer');
let messageDisplay = document.getElementById('message');
let alarmSound = document.getElementById('alarm');
let alarmPlayed = false;

function batdau() {
    let totalSeconds = parseInt(minutesInput.value) * 60 + parseInt(secondsInput.value);
    if (isNaN(totalSeconds) || totalSeconds <= 0) {
        alert('Vui lòng nhập thời gian hợp lệ');
        return;
    }

    totalSeconds--;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    clearInterval(timer);
    timer = setInterval(() => {
        totalSeconds--;
        if (totalSeconds < 0) {
            clearInterval(timer);
            timerDisplay.textContent = '00:00';
            if (!alarmPlayed) {
                messageDisplay.textContent = 'Hết giờ!';
                alarmSound.play();
                alarmPlayed = true;
            }
            return;
        }
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = totalSeconds % 60;
        timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }, 1000);
}

function reset() {
    clearInterval(timer);
    timerDisplay.textContent = '00:00';
    minutesInput.value = '';
    secondsInput.value = '';
    messageDisplay.textContent = ''; // Clear the message
    alarmSound.pause();
    alarmSound.currentTime = 0;
    alarmPlayed = false; // Reset the alarm flag
}
