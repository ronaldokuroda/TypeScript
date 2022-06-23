/* 
DESAFIO 2:
Como podemos melhorar o esse código usando TS? 

let pessoa1 = {};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz"

let pessoa2 = {}
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};

let pessoa4 = {
    nome = "carlos",
    idade = 19,
    profissao = "padeiro"
}
*/

interface Dados{
    Nome: String,
    Idade: Number,
    Profissao: Profissao
}

enum Profissao{
    Atriz,
    Pedreiro
}

let Pessoa1: Dados = {
    Nome: 'Maria',
    Idade: 29,
    Profissao: Profissao.Atriz
}

let Pessoa2: Dados={
    Nome: "Roberto",
    Idade: 19,
    Profissao: Profissao.Pedreiro
}

let Pessoa3: Dados = {
    Nome: "laura",
    Idade: 32,
    Profissao: Profissao.Atriz
}

let Pessoa4: Dados={
    Nome: "carlos",
    Idade: 19 ,
    Profissao: Profissao.Pedreiro
}



console.log(Pessoa1);
console.log(Pessoa2);