// // 1 variaveis

// let x = "João";
// let y = "Maria";

// console.log("Olá, " + x + " e " + y + "!");

// x = "joaquim";

// const idade1 = 18;

// console.log(`olá ${x} e ${y}`)

// console.log("Idade: " + idade1);

// // 2 mais sobre variaveis

// let nome = "Joca", idade = 18, altura = 1.82;

// console.log(`Nome: ${nome}, Idade: ${idade}, Altura: ${altura}`);

// let _nome = "Olavo";

// console.log(_nome);

// const $cargo = "Desenvolvedor";

// console.log("Cargo: " + $cargo);

// // 3 nomes reservados

// // let, const, var, function, return, if, else, 
// // for, while, do, switch, case, break, continue, 
// // default, true, false, null, undefined, NaN, Infinity, 
// // new, delete, this, arguments, instanceof, typeof, class, extends, super, 
// // import, export, async, await, try, catch, finally, throw, const, debugger

// // 4 ambiente JS

// //alert(`Olá, ${nome}`);
// console.log("Esse é o console");

// // 5 funções

// function soma(a, b) {
//     return a + b;
// }
// console.log(soma(124,25));

// // 6 prompt

// // let nome2 = prompt("Digite seu nome: ");
// // console.log("olá " + nome2);

// // const idade2 = prompt("Digite sua idade: ");
// // console.log("Idade: " + idade2);

// // 7 alert

// // alert("Minha pagina");

// // 8 math

// let num = 9.49;
// let num1 = 7.49;
// console.log(Math.floor(num));
// console.log(Math.ceil(num1));
// console.log(Math.max(num, 10));

// // 9 console

// console.error("erro");
// console.warn("alerta");
// console.info("informação");
// console.table(["João", "Maria", "José"]);


// 10 estruturas de controle

let idade3 = prompt("Digite sua idade: ");
let nome;

if (idade3 >= 18) {
    console.log("Maior de idade");
    nome = "João";
}else if (idade3 >= 12) {
    console.log("Adolescente");
    nome = "Maria";
}else {
    console.log("Criança");
    nome = "José";
}

console.log(`Nome: ${nome}`);
if(nome === "João"){
    console.log("Vai uma cachaça aí?");
}else if(nome === "Maria"){
    console.log("Vai um suco aí?");
}else{
    console.log("Vai um toddynho aí?");
}

let logado = false;

if(logado){
    console.log("Usuário logado");
}else{
    console.log("Faça o login para progredir")
}