// botões
let btn_start_timer = document.querySelector('#btn_start_timer');
let btn_stop_timer = document.querySelector('#btn_stop_timer');
let btn_restart_timer = document.querySelector('#btn_restart_timer');
let btn_continue_timer = document.querySelector('#btn_continue_timer');
// elemento com o cronometro
let timer_display = document.querySelector('#timer');

// valores do cronometro 
let mili_second = 0;
let seconds = 0;
let minutes = 0;

// ativa o botao de iniciar no comeco da aplicação
buttonDisplayController(btn_start_timer)

const TimerFeatures = {
    Start : ()=>{
        timer = setInterval(()=>{
            mili_second++;
            if(mili_second === 10){
                seconds++;
                mili_second = 0;
                if(seconds ===  60){
                    minutes++;
                    seconds = 0;
                }
            }
            timer_display.innerHTML = ("00" + minutes).slice(-2) + ':' + ("00" + seconds).slice(-2) + ':' + ("00" + mili_second).slice(-2);
        }, 100)
        buttonDisplayController(btn_stop_timer, btn_restart_timer);
    },
    Stop : () =>{
        clearInterval(timer);
        buttonDisplayController(btn_continue_timer, btn_restart_timer)
    },
    Restart : () => {
        clearInterval(timer);
        mili_segundos = segundos = minutos = 0;
        timer_display.innerHTML = ("00" + minutos).slice(-2) + ':' + ("00" + segundos).slice(-2) + ':' + ("00" + mili_segundos).slice(-2);
        buttonDisplayController(btn_start_timer)
    },
    Continue : () => {
        TimerFeatures['Start']()
    }
}

// le o borao que foi clicado
function clickBtn(button_clicked){
    TimerFeatures[button_clicked.value]()
}

// ativa e desativa os botoes
function buttonDisplayController(){
    btn_start_timer.style.display = "none";
    btn_stop_timer.style.display = "none";
    btn_restart_timer.style.display = "none";
    btn_continue_timer.style.display = "none";

    // ativa os botoes necessarios
    for(let button in arguments){
        arguments[button].style.display = "block";
    }
}