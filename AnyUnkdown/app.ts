let anyEstaDeVolta: any;
anyEstaDeVolta = 3;
anyEstaDeVolta = 'teste';
anyEstaDeVolta = 5;

let stringTest: string = 'verificar'
stringTest = anyEstaDeVolta;

let unkdownValor: unknown;
unkdownValor = 3;
unkdownValor = 'opa';
unkdownValor = true;
unkdownValor = 'vai sim';

let stringTest2: string = 'Agora Vai';

if(typeof unkdownValor === 'string'){
    stringTest2 = unkdownValor;
}

function jogaErro(erro: string, codigo: number): never{
    throw {erro: erro, code: codigo}
}

jogaErro('deu erro', 500)

