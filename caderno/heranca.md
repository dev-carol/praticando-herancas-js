
## Prototype chain

- É uma maneira default da linguagem de fazer herança
- Podemos instanciar objetos no prototype de outros, criando a herança

```jsx
function Pessoa(){
	this.classe = "Mamífero";
  this.falar =function (){
		console.log("olá")
}

function Advogado(){
	this.profissao = 'Advogado';
}

advogado.prototype = new Pessoa();

let joao = new Advogado ();

joao.falar();
}
```

---

## Checando a herança

- Quando utilizamos a prototype chain, o objeto passa a virar instância de todos os “pais”;
- Podemos verificar isso pela instrução instanceof;

```jsx
console.log(Joao instanceof Advogado);
console.log(Joao instanceof Pessoa);
console.log(Joao instanceof Object);
```

---

## Métodos e props no Prototype

- A ideia de utilizar o prototype é para que cada prop ou método adicionado nele não se repita acada objeto instanciado;
- Então esta herança beneficia o código, criando uam referência para os novos objetos, deixando o programa mais performático;
- Não ocupando um novo espaço na memória a cada obj criado;

```jsx
function Pessoa(){
	 Pessoa.prototype.classe = 'Mamifero';
		Pessoa.prototype.falar  = function (){
	console.log("Olá");
}

function Advogado(){
	 Advogado.prototype.profissao  = 'Advogado';
	Advogado.prototype = new Pessoa();
}

let joao = new Advogado();

joao.falar();
}
```

---

## Copiando apenas o prototype

- Utilizar o prototype é uma boa prática
- Então, por que não clonar só o prototype em vez da instância do objeto?

```jsx
function Pessoa(){}

Pessoa.prototype.classe = 'Mamífero';
Pessoa.prototype.falar = function (){
	console.log("olá");
}

function Advogado(){}

Advogado.prototype.profissao 'Advogado';

//clonando apenas o prototype de pessoa

Advogado.prototype = Pessoa.prototype;

let joao = new Advogado();

joao.falar():
```

---

## O problema da prototype chain

- Utilizando a aobordagem de clonar só o prototype tem um side effect;
- Se você muda o prototype, toda a cadeira que o utiliza, vai ser alterada também;
- Então, utilize desse jeito apenas quando não precisa mudar métodos e propriedades

```jsx
let joao = new Advogado();

Advogado.prototype.falar = function(){
	console.log("Tchau");
}

let pedro = new Pessoa();

pedro.falar();
```

---

## Constructor temporário

- Caso você tenha uma solução que não te deixaria optar por propriedades e métodos, que não são alteráveis, você pode utilizar um constructor temporário e resolver o problema;

```jsx
//clonando apenas o prototype de Pessoa, com constructor temporário

let F = function(){}/

F.prototype = Pessoa.prototype;
Advogado.prototype = new F();
```

---

## Função de constructor tempoário

- Para facilitar as cosias e deixar a herança reutilizável também, podemos utilizar uma função;

```jsx
function extend (Filho, Pai){
 let F == function(){};
	F.prototype = Pai.prototype;
  Filho.prototype = new F();
}

function Pessoa(){
	Pessoa.prototype.classe = 'Mamífero';
Pessoa.prototyé.falar = function(){
	 console.log("Olá");
	 }
}

function Advogado(){}

Advogado.prototype.profissao = 'Advogado';

//herança

extend(Advogado, Pessoa ) 

let joao = new Advogado;

joao.falar();
```

---

## Copiando propriedades

- Podemos em vez de utilizar o fake cosntructor copiar as propriedes por um loop e realizar a herança;
- Precisamos utilziar a propriedade Uber, que nos dará acesso ao obj Pai;
- A parte ruim desta abordagem é que ela recira as propriedades e métodos;

```jsx
function extend(Filho, Pai){
 let paiProto = Pai.prototype;
	let filhoProto = Filho.prototype;

for (let i in paiProto){
  filhoProto[i] = paiProto[i];
 }
//filho tem acesso ao obj pai
	filhoProto.uber = paiProto;
}

function Veiculo(){}

Veiculo.prototype.motor =1;
Veiculo.prototype.carenagem = 'aço'

function Carro(cor){
		this.cor = cor;
}

Carro.prototype.portas = 4;

extend(Carro, Veiculo);

let bmw = new Carro ('azul');

console.log(bmw.carenagem);
```

---

## Outro problema ao copiar por loop

- Os arrays ficam alocados na memória e é criado apenas uma referência, fazend ocom o que se o array do filho se altere o do pai também;

```jsx
Veiculo.prototype.opicionais = ['teto solar', 'aro de alumínio', 'display 8'];

extend (Carro, Veiculo);

console.log(Veiculo.prototype);

Carro.prototype.opicionais.push('blindagem');

console.log(Veiculo.prototype.opicionais);
```

---

## Object Clone

- Podemos utilizar uma estrategia de copiar um objeto, resolvendo este problema;
- Porém, veja que o código fica complexo demais, talvez não seja o caso de utilizar herança para isso;
- Além de não utilizar prototypes nesta forma;

```jsx
function objectClone(o, stuff){
 var n;
function F(){}
n = new F();
n.uber = o;
 for (var i in stuff){
 n[i] = stuff[i];
 }
  return n;
}

function Veiculo(){
	 this.carenagem = 'aço';
	 this.opicionais = ['blindagem', 'lanterna led'];
}

let v = new Veiculo;

let ferrari = objectClone (v,{
	rodas: 4;
		marca: 'Ferrari'
});

console.log(ferrari);
```

---

## Herança múltipla

- Uma estrutura difícil de manter e o JS não nos dá esta funcionalidade de forma fácil, pois precisamos criar a função
- É difícil de manter;
- Melhor optar por prototype chain

```jsx
function multi(){
var n = {}, stuff, j = 0, len = arguments.length;
for (j = 0; j <len; j++){
stuff = arguments[j];
for (var i in stuff){
		if(stuff.hasOwnProperty(i)){
	 n[i] = stuff[i];
    }
  }
}
 return n;
}

let pneu = {
	 material: 'borracha'
}

let aro = {
 tamanho: 20
}

let  pneuMontado = multi(pneu, aro);

console.log(pneuMontado)
```