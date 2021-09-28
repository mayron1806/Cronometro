let input_hour = document.querySelector("#hour")
let input_min = document.querySelector("#min")
let input_sec = document.querySelector("#sec")

function sendTime(){
    let hour = input_hour.value == '' ? 0 : input_hour.value
    let min = input_min.value == '' ? 0 : input_min.value
    let sec = input_sec.value == '' ? 0 : input_sec.value
    
    calculateTime(hour, min, sec);
}
function calculateTime(hour, min, sec){
    console.log(("00" + hour).slice(-2) + ':' + ("00" + min).slice(-2) + ':' + ("00" + sec).slice(-2))
    displayTime(hour, min, sec);
    let countdown = setInterval(() => {
        if (sec > 0){
            sec--;
        }
        else if (min > 0){
            min--;
            sec = 59;
        }
        else if (hour > 0){
            hour--;
            min = 59;
            sec = 59;
        }
        else{
            clearInterval(countdown)
        }
        displayTime(hour, min, sec);
    }, 1000)
}
function displayTime(hour, min, sec){
    let countdown_display = document.querySelector("#countdown_display")
    countdown_display.innerHTML = ("00" + hour).slice(-2) + ':' + ("00" + min).slice(-2) + ':' + ("00" + sec).slice(-2);
}