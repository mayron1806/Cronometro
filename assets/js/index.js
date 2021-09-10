let main = document.querySelector("#main");

let btn_timer = document.querySelector("#timer")
let btn_countdown = document.querySelector("#countdown")

const features = {
    Timer : "../../timer.html",
    Countdown : "../../countdown.html"
}

function openFeature(clicked_btn){
    const ajax = new XMLHttpRequest()
    ajax.open("GET", features[clicked_btn.value])

    ajax.onreadystatechange = () =>{
        if (ajax.readyState === 4){
            main.innerHTML = ajax.responseText;
        }
    }
    ajax.send()
}