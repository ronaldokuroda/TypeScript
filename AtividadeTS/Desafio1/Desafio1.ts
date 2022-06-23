/*

DESAFIO 1:
Como podemos rodar isso em um arquivo .ts sem causar erros? 

let employee = {};
employee.code = 10;
employee.name = "John";

*/


const Ricardo = {
    code: 5,
    name: 'Ricardo'
}

//----------------------

interface employee{
    code: number,
    name: String
}

let John: employee = {
    code: 10,
    name: 'John'
}

let Carlos: employee = {
    code: 20,
    name: 'Carlos'
}


console.log(John);
console.log(Ricardo);
