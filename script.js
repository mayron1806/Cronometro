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

 function clicarBotao(botao){
     if(botao.className === "Iniciar"){
         iniciar();
         ativarOuDesatvarBotoes(botao_parar, botao_reiniciar);
     }
     else if(botao.className === "Parar"){
         parar();
         ativarOuDesatvarBotoes(botao_reiniciar, botao_continuar);
     }
     else if(botao.className === "Reiniciar"){
         reiniciar();
         ativarOuDesatvarBotoes(botao_iniciar);
     }
     else if(botao.className === "Continuar"){
         continuar();
         ativarOuDesatvarBotoes(botao_parar, botao_reiniciar);
     }
 }

 function iniciar(){
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
     }, 100)}
 
 function parar(){
     clearInterval(cronometro);
 }
 function reiniciar(){
     clearInterval(cronometro);
     mili_segundos = segundos = minutos = 0;
     h1_cronometro.innerHTML = ("00" + minutos).slice(-2) + ':' + ("00" + segundos).slice(-2) + ':' + ("00" + mili_segundos).slice(-2);
 }
 function continuar(){
     iniciar();
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