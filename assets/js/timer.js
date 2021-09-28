// botões
let btn_start_timer = document.querySelector('#btn_start_timer');
let btn_stop_timer = document.querySelector('#btn_stop_timer');
let btn_restart_timer = document.querySelector('#btn_restart_timer');
let btn_continue_timer = document.querySelector('#btn_continue_timer');


let timer;

// valores do cronometro 
let mili_sec = 0;
let sec = 0;
let min = 0;

// ativa o botao de iniciar no comeco da aplicação
buttonDisplayController(btn_start_timer)

const TimerFeatures = {
    Start : ()=>{
        timer = setInterval(()=>{
            mili_sec++;
            if(mili_sec === 10){
                sec++;
                mili_sec = 0;
                if(sec ===  60){
                    min++;
                    sec = 0;
                }
            }
            displayTime(min, sec, mili_sec)
        }, 100)
        buttonDisplayController(btn_stop_timer, btn_restart_timer);
    },
    Stop : () =>{
        clearInterval(timer);
        buttonDisplayController(btn_continue_timer, btn_restart_timer)
    },
    Restart : () => {
        clearInterval(timer);
        mili_sec = sec = min = 0;
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

// mostra o tempo na tela
function displayTime(min,sec, m_sec){
    // elemento com o cronometro
    let timer_display = document.querySelector('#timer_count');
    timer_display.innerHTML = ("00" + min).slice(-2) + ':' + ("00" + sec).slice(-2) + ':' + ("00" + m_sec).slice(-2);
}