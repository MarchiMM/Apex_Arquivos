/*
    for (let index = frase.length; index >= 1; index--) {
        charAt(index)
    }

    1) Escreva um script que solicite uma frase ao usuário e em seguida 
    apresente a frase digitada separada em duas partes.

    Dicas:
    utilizar matematica (dividir por 2)

    Eu sou o Diego
    Eu sou 
    o Diego
*/

/*
    2) Escreva um script que solicite uma frase para o usuário 
    e em seguida escreva a frase invertida.

    Exemplo:
    Aula de lógica na quarta feira
    arief atrauq an acigól ed aluA
*/

function escreverFraseDivididaEmDuasPartes(frase) {
    let iDividido = frase.length / 2

    document.write(`<h2>${frase.substring(0, iDividido)}</h2>`)
    document.write(`<h2>${frase.substring(iDividido)}</h2>`)
}



function escreverFraseAoContrario(frase) {
    for (let index = frase.length; index > -1; index--) {
        document.write(`${frase.charAt(index)}`)
    }
}

let frase = window.prompt('Informe uma frase.')
escreverFraseAoContrario(frase)
escreverFraseDivididaEmDuasPartes(frase)