let button = document.getElementById('button');
let input1 = document.getElementById('input1') as HTMLInputElement;
let input2 = document.getElementById('input2') as HTMLInputElement;
let saida = document.getElementById('saida');
const p = document.createElement("p");

function adicionarNumeros (numero1:number, numero2:number){
    return numero1 + numero2;
}



if (button){
    button?.addEventListener('click', () => {
        p.textContent = adicionarNumeros(Number(input1.value), Number(input2.value)).toString();

        saida?.appendChild(p);
       console.log( adicionarNumeros(Number(input1.value), Number(input2.value)));
    })
}