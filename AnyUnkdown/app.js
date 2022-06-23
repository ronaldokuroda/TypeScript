"use strict";
let anyEstaDeVolta;
anyEstaDeVolta = 3;
anyEstaDeVolta = 'teste';
anyEstaDeVolta = 5;
let stringTest = 'verificar';
stringTest = anyEstaDeVolta;
let unkdownValor;
unkdownValor = 3;
unkdownValor = 'opa';
unkdownValor = true;
unkdownValor = 'vai sim';
let stringTest2 = 'Agora Vai';
if (typeof unkdownValor === 'string') {
    stringTest2 = unkdownValor;
}
function jogaErro(erro, codigo) {
    throw { erro: erro, code: codigo };
}
jogaErro('deu erro', 500);
