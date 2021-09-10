let countdown_display = document.querySelector("#countdown_display")

let input_hour = document.querySelector("#hour")
let input_min = document.querySelector("#min")
let input_sec = document.querySelector("#sec")

let hour
let min
let sec

function sendTime(){
    hour = input_hour.value
    min = input_min.value
    sec = input_sec.value
}
function calculateTime(){
    let full_seconds = (hour * 3600) + (min * 60) + (sec)
}