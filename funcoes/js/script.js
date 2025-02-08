// 1 funcoes

function sum(a, b){
    return a+ b;
}

console.log(sum(124, 25)); 

const minhaFuncao = function(){
    console.log("Minha página");
}

minhaFuncao();

function alerta(){ 
    alert("Minha página");
}

function nome(){
    let nome = prompt("Digite seu nome: ");
    alert("Olá " + nome);
}

// 2 retornos

const a = 10;
const b = 20;

function soma(n1, n2){
    return n1 + n2;
}

let s = soma(a, b);

console.log(s);

// 3 escopo da funcao

let y = 10;

function teste(){
    let y = 20;
    console.log(y);
}
teste();
console.log(y);

// 4 escopo aninhado

function teste1(){
    let y = 20;
    console.log(y);
    if(true){
        let y = 30;
        console.log(y);
    }
}

teste1();