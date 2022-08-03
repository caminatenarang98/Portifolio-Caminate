
// Exercício 2
var perfil = { "Nome": "Caminaté", "Apelido": "Na Rang", "Idade": "23 anos", "Nacionalidade": "guineense", "Profissão atual": "Estudante de Informática e Tecnologias Multimédia" };
const gostos = ["Desporto", "Leitura", "Pesquisas", "Assistir Tv", "Divertir com amigos"];
console.log("Meu perfil: ", perfil);
console.log("Meus gostos", gostos);
// Exercíco 3
let n1 = 20;
let n2 = 50;
let res = n1 + n2;
console.log("A soma entre ", n1, " e ", n2, " é igual a ", res);
// Exercício 4
const decisao = new Date().getHours() > 13 ? "Depois":"Antes";
const decisao2 = new Date().getHours() === 13 ? "Na hora":" ";
console.log(decisao," |",decisao2);

// Exercício 5
const hora = new Date().getHours();
if(hora >= 19){
    console.log("Boa noite!")
} else if(hora >= 12){
    console.log("Boa tarde!")
} else if(hora >= 6){
    console.log("Bom noidiate!")
}

// Êxercício 20

function Alunos(nome, curso, ano){
    this.nome = nome;
    this.curso = curso;
    this.ano = ano;
}

Aluno81759 = new Alunos("Caminate Na Rang","ITM",1);
Aluno81760 = new Alunos("Ricardo Pereira","ITM",1);
Aluno81761 = new Alunos("Gonçalo Inâcio","ITM",1);

console.log(Aluno81759);
console.log(Aluno81760);
console.log(Aluno81761);


// Exercício 21

class Aluno {
    constructor(nome, curso, ano){
        this.nome = nome;
        this.curso = curso;
        this.ano = ano;
    }
}
const aluno10 = new Aluno("Ricardo", "ITM", 1);
const aluno20 = new Aluno("Braima", "ITM", 1);


class AlunoITM extends Aluno {
    superpoder(){
        console.log("Programar");
    }
}
const aluno110 = new AlunoITM("Aladje", "ITM", 1);
const aluno210 = new AlunoITM("Isnaba", "ITM", 1);

aluno110.superpoder();

// Exercício 22

let alunoCopia = {};
for (let key in aluno10){
    alunoCopia[key] = aluno10[key];
}

// Exercíco 23

const UC = ["Álgebra Linear e Geometria Analítica", "Arquitetura de Computadores", "Cálculo", "Linguagens de Programação", "Tecnologias de Internet"];

for (let i = 0; i < UC.length; i++){
    console.log(UC[i]);
}

console.log(`O tamnho do array UC: ${UC.length}`);

// Exercício 24

UC.unshift("Leitura");
UC.pop();
console.log(UC);