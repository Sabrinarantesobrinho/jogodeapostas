function startrace(){
   
    /****** Fases de Desenvolvimentop de SW   *********      
        PASSO 1: Saber o que se pretende
        PASSO 2: Criar a interface
        PASSO 3: Fazer o parser dos dados/validações
        PASSO 4: Resolver o problema... seja lá o que isto quer dizer...
        PASSO 5: Mostrar resultados
    ***********************************************************/

    /******* VARIAVEIS *********/  
    var bet1 = Number(document.getElementById("txtaposta1").value);
    var bet2 = Number(document.getElementById("txtaposta2").value);
    var bet3 = Number(document.getElementById("txtaposta3").value);
    var creditos = Number(document.getElementById("fichas").innerHTML);
    //verifica se existem valores apostados
    if(bet1=="" && bet2=="" && bet3==""){
        alert("Por favor faca a sua aposta");
        return;
    }
    if((bet1 + bet2 + bet3)>creditos){
        alert("Por favor as aspostas não podem ser superiores a " + creditos);
        return;
    }
    if (bet1==""){bet1=0;}
    if (bet2==""){bet2=0;}
    if (bet3==""){bet3=0;}

    // verifica se a aposta 1 é numerico
    if(isNaN(bet1)==true){
        alert("Por favor introduza um numero na aposta 1");
        return;
    }
    if(bet1< 0 || bet1 > creditos){
        alert("Por favor introduza um numero na aposta 1 entre 0 e " + creditos);
        return;
    }
 // verifica se a aposta 2 é numerico
    if(isNaN(bet2)==true){
        alert("Por favor introduza um numero na aposta 2");
        return;
    }
    if(bet2< 0 || bet2 > creditos){
        alert("Por favor introduza um numero na aposta 2 entre 0 e " + creditos);
        return;
    }
// verifica se a aposta 3 é numerico
if(isNaN(bet3)==true){
    alert("Por favor introduza um numero na aposta 3");
    return;
}

if(bet3< 0 || bet3 > creditos){
    alert("Por favor introduza um numero na aposta 3 entre 0 e " + creditos);
    return;
}

/*****  *********/


creditos = creditos - (bet1 + bet2 + bet3);
document.getElementById("fichas").innerHTML = creditos;

var Player1 = document.getElementById("Player1");
var Player2 = document.getElementById("Player2");
var Player3 = document.getElementById("Player3");


var partida = window.innerWidth * 0.16;
var meta = window.innerWidth * 0.60;

var posPlayer1 = partida;
var posPlayer2 = partida;
var posPlayer3 = partida;



var timer = setInterval(frame,20);


function frame(){

    posPlayer1 = posPlayer1 + (5 * Math.random())
    posPlayer2 = posPlayer2 + (5 * Math.random())
    posPlayer3 = posPlayer3 + (5 * Math.random())
    
    Player1.style.left = posPlayer1 + "px";
    Player2.style.left = posPlayer2 + "px";
    Player3.style.left = posPlayer3 + "px";

    document.getElementById("metrosPlayer1").innerHTML = Math.round((posPlayer1 * 100)/meta) + "/100";
    document.getElementById("metrosPlayer2").innerHTML = Math.round((posPlayer2 * 100)/meta) + "/100";
    document.getElementById("metrosPlayer3").innerHTML = Math.round((posPlayer3 * 100)/meta) + "/100";


    if(posPlayer1 >= meta){
        alert("O cavalo 1 Ganhou...");
        document.getElementById("fichas").innerHTML = creditos + (2 * bet1);
        document.getElementById("vitoriaPlayer1").innerHTML = Number(document.getElementById("vitoriaPlayer1").innerHTML) + 1;
        
        Player1.style.left = partida + "px";
        Player2.style.left = partida + "px";
        Player3.style.left = partida + "px";

        clearInterval(timer);
    }

    if(posPlayer2 >= meta){
        alert("O cavalo 2 Ganhou...");
        document.getElementById("fichas").innerHTML = creditos + (2 * bet2);
        document.getElementById("vitoriaPlayer2").innerHTML = Number(document.getElementById("vitoriaPlayer2").innerHTML) + 1;
        Player1.style.left = partida + "px";
        Player2.style.left = partida + "px";
        Player3.style.left = partida + "px";

        clearInterval(timer);
    }

    if(posPlayer3 >= meta){
        alert("O cavalo 3 Ganhou...");
        document.getElementById("vitoriaPlayer3").innerHTML = Number(document.getElementById("vitoriaPlayer3").innerHTML) + 1;
        document.getElementById("fichas").innerHTML = creditos + (2 * bet3);
        Player1.style.left = partida + "px";
        Player2.style.left = partida + "px";
        Player3.style.left = partida + "px";

        clearInterval(timer);
    }
}
}