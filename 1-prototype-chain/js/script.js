
// Classe: PAI

function Veiculo(){
    this.carenagem = 'aço';
    this.ligar = function(){
        console.log("O veículo ligou!");
    }
}

// Classe : FILHO


function Trem(tipo){
    this.tipo = tipo;
    this.vagoes = 50;
}

Trem.prototype = new Veiculo (); //criando uma instancia dentro de prototype

let trembala = new Trem('Trem Bala');

console.log(trembala.tipo);
tremBala.ligar();