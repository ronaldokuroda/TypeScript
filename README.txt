Exercicos Realizadas durante a Atividade de Introdução Praticas ao TypeScript com o Instrutor João Santos.


abaixo alguns comandos utilizados.

node --version //versao do node instalado
npm --version //versao do npm instalado


npm init    //inicia npm
tsc --init //inicia o tsc

npm --save-dev typescript

npm install lite-server //biblioteca que procura um index.html na pasta raiz e realiza os teste.

packet.json //no arquivo json, após ""test": "echo \"Error: no test specified\" && exit 1"" inserir uma virgula e colocar os dois atributos abaixo:

    "start": "lite-server",
    "watch": "tsc --watch"


para chamar os atributos, insira o comando npm start e o npm run watch
npm start 
npm run watch
