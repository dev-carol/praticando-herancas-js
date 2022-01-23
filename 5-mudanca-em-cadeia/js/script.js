

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


Carro.prototype = Veiculo.prototype; 
Trem.prototype = Veiculo.prototype; 


let trembala = new Trem('Trem Bala');
let ferrari = new Carro();

// não faça isso, pois quando os objeto
Carro.prototype.ligar = function(){
    console.log("O carro ligou!");
}


  //todos pegaram a função ligar que está atrelada a carro,

trembala.ligar(); 
ferrari.ligar();