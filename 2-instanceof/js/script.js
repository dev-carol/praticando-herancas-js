
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

function Carro(){
    this.pneus = 4;
}

Carro.prototype = new Veiculo();
Trem.prototype = new Veiculo (); //criando uma instancia dentro de prototype

let trembala = new Trem('Trem Bala');
let ferrari = new Carro();


console.log(trembala instanceof Trem);
console.log(ferrari instanceof Carro);

console.log(trembala instanceof Veiculo);
console.log(ferrari instanceof Veiculo);

console.log(trembala instanceof Object);
console.log(ferrari instanceof Object);