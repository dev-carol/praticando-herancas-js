

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

//Copiando só o prototype, em vez de instânciar uma classe

Carro.prototype = Veiculo.prototype; //Copiando um objeto dentro de outro
Trem.prototype = Veiculo.prototype; 


let trembala = new Trem('Trem Bala');
let ferrari = new Carro();

console.log(trembala.carenagem);