var hour = document.getElementById('hour');
var minute = document.getElementById('minutes');
var second = document.getElementById('seconds');
var hourRotation = 180;
var minuteRotation = 180;
var secondRotation = 180;

function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() + 
        new Date().getMinutes() * 60 + 
        new Date().getHours() * 3600;
}

setInterval( function() {
    var time = getSecondsSinceStartOfDay();
    hourRotation = 180 + ((time/3600)*30)%360;
    minuteRotation = 180 + ((time/60)*6)%360;
    secondRotation = 180 + (time*6)%360;
    console.log(secondRotation);
    hour.style.transform = `rotate(${hourRotation}deg)`;
    minute.style.transform = `rotate(${minuteRotation}deg)`;
    second.style.transform = `rotate(${secondRotation}deg)`
}, 1000);
