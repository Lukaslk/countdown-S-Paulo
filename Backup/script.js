/*
//Horário do relógio

var minhaVariavel = setInterval(meuTempo, 1000);

function meuTempo() {
    var d = new Date();
    document.getElementById('hora').innerHTML = d.toLocaleTimeString();
}

//Botões para iniciar o relógio e parar
function iniciar() {
    minhaVariavel = setInterval(meuTempo, 1000);
    ativo = false; 
}

function parar() {
    clearInterval(minhaVariavel);
    ativo = false;
}
//----------------------------------------------------------------

//Campo de digitar o nome do relógio
var d = document.getElementById('input_nome_relogio');
var c = document.getElementById('titulo');

document.getElementById("input_nome_relogio")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        c.innerHTML = d.value;
    }
});
//---------------------------------------------------------
//Contador

/*
function contarTempo(m_init) {
    let t_hora = document.getElementById('hora_contador');
    let t_minutos = document.getElementById('min_contador');
    let t_segundos = document.getElementById('seg_contador');
    let pegarDataCalendario = document.getElementById('calendario').value;
    
    t_minutos.innerHTML = '' + m_init -1;
    t_segundos.innerHTML = '59';

    let m = m_init - 1;
    let s = 59;

    var contador = setInterval(function() {

        t_minutos.innerHTML = '' + m;
        t_segundos.innerHTML = '' + s;

        if(s > 0) s-= 1;
        else if(s == 0 && m > 0) {s = 59; m -= 1; }
        else {m = m_init}
    }, 1000)

}
contarTempo(15)
*/
/*/
/*          Calendario             */

const capturaTempoHoje = new Date();
const dia = capturaTempoHoje.getDate();
const mes = capturaTempoHoje.getMonth() + 1
const ano = capturaTempoHoje.getFullYear() + 1;
const diaMesAno = ano + '-' + mes + '-' + dia;


document.querySelector('#calendario').value = diaMesAno;

/*          contador           */
/*
function calcularDataDiff() {
    let inicio = document.querySelector('#calendario').value;
    let final = document.querySelector('#calendario_final').value;

    inicio = new Date(inicio)
    final = new Date(final)

    //conversão em dias
    let diffTempo = Math.abs(final - inicio)
    let tempoEmUmDia = 24 * 60 * 60 * 1000;
    let diffEmdia = diffTempo / tempoEmUmDia;

    return diffEmdia
}


const div_calendario = document.querySelector('#div_contador');
const setar_diferenca = document.querySelector('#dias');

div_calendario.addEventListener('click', () => {
    const diffInDays = calcularDataDiff()
    setar_diferenca.innerHTML = 'Falta ' + diffInDays + ' dias'
})
*/

const newyeartime = new Date(`${diaMesAno} 00:00:00`);

const atualizarContador = () => {
    let currentTime = new Date()
    let difference = newyeartime - currentTime;
    let dias = Math.floor(difference / 1000 / 60 / 60 / 24);
    let horas = Math.floor(difference / 1000 / 60 / 60) % 24;
    let minutos = Math.floor(difference / 1000 / 60) % 60;
    let segundos = Math.floor(difference / 1000) % 60;
    
    console.log({ dias, horas, minutos, segundos })
}

setInterval(atualizarContador, 1000)

