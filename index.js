let alarmTimeout;

function setAlarm() {
    const alarmTime = document.getElementById('alarmTime').value;

    if (!alarmTime) {
        alert('Please select a valid time.');
        return;
    }

    const now = new Date();
    const [hours, minutes] = alarmTime.split(':');
    const alarm = new Date();

    alarm.setHours(hours, minutes, 0, 0); // Set the alarm time with today's date

    // If the alarm time is in the past, set the alarm for tomorrow
    if (alarm < now) {
        alarm.setDate(alarm.getDate() + 1);
    }

    const timeToAlarm = alarm - now;

    document.getElementById('message').innerText = `Alarm set for ${alarm.toLocaleTimeString()}`;

    alarmTimeout = setTimeout(() => {
        alert('Alarm! Time to wake up!');
        document.getElementById('message').innerText = 'Alarm triggered!';
    }, timeToAlarm);
}

function clearAlarm() {
    if (alarmTimeout) {
        clearTimeout(alarmTimeout);
        document.getElementById('message').innerText = 'Alarm cleared!';
    }
}