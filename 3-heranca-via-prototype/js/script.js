

function Veiculo(){
 Veiculo.prototype.carenagem = 'aço';
 Veiculo.prototype.ligar = function(){
     console.log("O veículo ligou!")
 }
}


function Trem(tipo){
    this.tipo = tipo;
   
}

Trem.prototype.vagoes = 50;

function Carro(){}

Carro.prototype.pnes = 4;

Carro.prototype = new Veiculo();
Trem.prototype = new Veiculo (); 
let trembala = new Trem('Trem Bala');
let ferrari = new Carro();

trembala.ligar();