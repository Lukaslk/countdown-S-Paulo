carregarEventoListiner();

function carregarEventoListiner() {
	document.addEventListener('DOMContentLoaded', function() { calcTempo(); });
};

var data = document.querySelector("#calendario").value;
var agora = new Date();
var tempoInicial = '';
var novoANo = new Date().getTime()

function calcTempo(datas) {
    clearInterval(tempoInicial)

    if(typeof(datas) == 'undefined'){
		data = new Date(novoANo).getTime();
	}else {
		data = new Date(datas).getTime();
    }
    
    function atualizarTempo(data) {

        var agora = new Date().getTime()
        var dif_entre_datas = data - agora;

        var dias = Math.floor(dif_entre_datas / (1000 * 60 * 60 * 24));
		var horas = Math.floor((dif_entre_datas % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) + 3);
		var minutos = Math.floor((dif_entre_datas % (1000 * 60 * 60)) / (1000 * 60));
		var segundos = Math.floor((dif_entre_datas % (1000 * 60)) / 1000);


        document.querySelector('#dias').innerHTML = dias;
        document.querySelector('#horas').innerHTML = horas;
        document.querySelector('#minutos').innerHTML = minutos;
        document.querySelector('#segundos').innerHTML = segundos;

        if(agora >= data){
			clearInterval(tempoInicial);
			document.querySelector('#dias').innerHTML = 'Dia';
			document.querySelector('#horas').innerHTML = 'Hrs';
			document.querySelector('#minutos').innerHTML = 'Min';
			document.querySelector('#segundos').innerHTML = 'Seg';
		}
    }

    tempoInicial = setInterval(function() { atualizarTempo(data); }, 1000);
}