

function Veiculo(){}
 Veiculo.prototype.carenagem = 'aço';
 Veiculo.prototype.ligar = function(){
     console.log("O veículo ligou!")
 }


function Trem(tipo){
    this.tipo = tipo;
   
}

Trem.prototype.vagoes = 50;

function Carro(){}

Carro.prototype.pneus = 4;

Trem.prototype = Veiculo.prototype; 

//constructor temporaário
let F = function(){};
F.prototype = Veiculo.prototype;
Carro.prototype = new F();


let trembala = new Trem('Trem Bala');
let ferrari = new Carro();


Carro.prototype.ligar = function(){
    console.log("O carro ligou!");
}


trembala.ligar(); 
ferrari.ligar();