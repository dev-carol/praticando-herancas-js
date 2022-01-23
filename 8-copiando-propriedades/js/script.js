function extend(Filho, Pai){
     let paiProto = Pai.prototype;
     let filhoProto = Filho.prototype;
     for(let i in paiProto){
         filhoProto[i] = paiProto[i]
     }

     //filho tem acesso ao obj Pai
     filhoProto.uber = paiProto;
}

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

//constructor temporário por função

extend(Trem, Veiculo);
extend(Carro, Veiculo);

let trembala = new Trem('Trem Bala');
let ferrari = new Carro();


Carro.prototype.ligar = function(){
    console.log("O carro ligou!");
}

Trem.prototype.ligar = function(){
    console.log("Piuuuuiiii");
}

trembala.ligar(); 
ferrari.ligar();