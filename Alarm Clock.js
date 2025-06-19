console.log("This is tutorial 54");
const alarmSubmit = document.getElementById('alarmSubmit');

// Add an event listener to the submit button
alarmSubmit.addEventListener('click', setAlarm);

var audio = new Audio('BigAlarm.mp3');

// function to play the alarm ring tone
function ringBell() {
    audio.play();
}

// This function will run whenever an alarm is set from the UI
function setAlarm(e) {
    e.preventDefault();
    const alarm = document.getElementById('alarm');
    const error = document.getElementById('alarmHelp');
    const alertSuccess = document.querySelector('#alert-success'); // Use querySelector for single elements
    const alertWarning = document.querySelector('#alert-warning'); // Use querySelector for single elements
    alarmDate = new Date(alarm.value);
    
    if (!alarm.value) {
        alertWarning.textContent = "Please enter a valid date and time for the alarm.";
        return; // Exit the function gracefully
    }

    console.log(`Setting Alarm for ${alarmDate}...`);
    now = new Date();
    
    if (isNaN(alarmDate.getTime())) {
        alertWarning.textContent = "Invalid date and time entered. Use this format: yyyy-mm-dd hh:mm:ss";
        return; // Exit the function gracefully
    }

    let timeToAlarm = alarmDate - now;
    
    if (timeToAlarm <= 0) {
        alertWarning.textContent = "Invalid date and time entered";
        return; // Exit the function gracefully
    }

    console.log(timeToAlarm);

    if (timeToAlarm >= 0) {
        setTimeout(() => {
            console.log("Ringing now")
            alertSuccess.textContent = 'Alarm successfully triggered!';
            alertSuccess.style.display = 'block';

            ringBell();
            
        }, timeToAlarm);
    }
}
