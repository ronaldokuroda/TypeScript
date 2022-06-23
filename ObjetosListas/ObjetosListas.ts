const pessoa ={
    nome: 'mariana',
    idade: 28,
    profissao: 'desenvolvedora'
}


const andre: {nome: string, idade: number, profissao: string }={
    nome: 'Andre',
    idade: 25,
    profissao: 'pintor'
}

const paula: {nome: string, idade: number, profissao: string }={
    nome: 'Paula',
    idade: 25,
    profissao: 'Desenvolvedora' //D maiusculo e la na pessoa o d e minusculo
}

//-------------------------------------------------------------------------

enum Profissao{
    professora,
    Atriz,
    Desenvolvedora,
    JogadoraDeFutebol
}

interface Pessoa{
    nome: string,
    idade: number,
    profissao?: Profissao
}

interface Estudante extends Pessoa{
    materias: string[]
}

const vanessa: Pessoa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissao.Desenvolvedora
}

const maria: Pessoa = {
    nome: 'Maria',
    idade: 23,
    profissao: Profissao.Desenvolvedora
}

const jessica: Estudante = {
    nome: 'jessica',
    idade: 28,
    profissao: Profissao.Desenvolvedora,
    materias: ['Matemática discreta', 'Programação']
}

const monica: Estudante = {
    nome: 'monica',
    idade: 28,
    materias: ['Matemática discreta', 'Programação']
}

function listar(lista: string[]) {
    for(const item of lista){
        console.log('-', item);
    }
}

listar(monica.materias);