"use strict";
let button = document.getElementById('button');
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
let saida = document.getElementById('saida');
const p = document.createElement("p");
function adicionarNumeros(numero1, numero2) {
    return numero1 + numero2;
}
if (button) {
    button === null || button === void 0 ? void 0 : button.addEventListener('click', () => {
        p.textContent = adicionarNumeros(Number(input1.value), Number(input2.value)).toString();
        saida === null || saida === void 0 ? void 0 : saida.appendChild(p);
        console.log(adicionarNumeros(Number(input1.value), Number(input2.value)));
    });
}
