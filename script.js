// botoes
let botao_iniciar = document.getElementById('botao_iniciar');
let botao_parar = document.getElementById('botao_parar');
let botao_reiniciar = document.getElementById('botao_reiniciar');
let botao_continuar = document.getElementById('botao_continuar');

// h1 com o cronometro
let h1_cronometro = document.getElementById('cronometro');

// 
let cronometro;

// cronometro 
let mili_segundos = 0;
let segundos = 0;
let minutos = 0;

const Cronometro = {
    Iniciar : ()=> {
        console.log('iniciando')
        cronometro = setInterval(()=>{
            mili_segundos++;
            if(mili_segundos === 10){
                segundos++;
                mili_segundos = 0;
                if(segundos ===  60){
                    minutos++;
                    segundos = 0;
                }
            }
            h1_cronometro.innerHTML = ("00" + minutos).slice(-2) + ':' + ("00" + segundos).slice(-2) + ':' + ("00" + mili_segundos).slice(-2);
        }, 100)
    },
    Parar : () => {
        console.log('parando')
        clearInterval(cronometro);
    },
    Reiniciar : () => {
        console.log('reiniciando')
        clearInterval(cronometro);
        mili_segundos = segundos = minutos = 0;
        h1_cronometro.innerHTML = ("00" + minutos).slice(-2) + ':' + ("00" + segundos).slice(-2) + ':' + ("00" + mili_segundos).slice(-2);
    },
    Continuar : () => {
        console.log('continuando')
        Cronometro['Iniciar']()
    }
}

function clicarBotao(botao){
    Cronometro[botao.className]()
}
function ativarOuDesatvarBotoes(){
    botao_iniciar.style.display = "none";
    botao_parar.style.display = "none";
    botao_reiniciar.style.display = "none";
    botao_continuar.style.display = "none";

    // ativa os botoes necessarios
    for(var botao in arguments){
        arguments[botao].style.display = "block";
    }
}