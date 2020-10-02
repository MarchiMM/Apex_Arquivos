/*
    Calculadora
        operacao pode ser + ou - ou * ou /

    Crie as seguintes funçoes:
        somar(numero1, numero2) : number
        subtrair(numero1, numero2) : number
        multiplicar(numero1, numero2) : number
        dividir(numero1, numero2) : number
        
        efetuarCalculo(numero1, numero2, operacao) : number
            dependendo da operacao, ira efetuar a chamada para a função que faz o calculo solicitado
            nesta função utilizar o switch

        OBS: Lembrem que quem retorna o resultado neste exercicio é a funcao efetuarCalculo

    solicitar ao usuario o primeiro numero - parseFloat()
    solicitar ao usuario o segundo numero - parseFloat()
    solicitar ao usuario a operacao -  é uma string ("+", "-", "*", "/")

    exibir na tela o resultado do calculo conforme solicitado pelo usuario

    OBRIGATÓRIO: utilizar apenas uma vez o document.write()
*/

function somar (numero1, numero2) {
    return numero1 + numero2;
}
function subtrair (numero1, numero2) {
    return numero1 - numero2;
}
function multiplicar (numero1, numero2) {
    return numero1 * numero2;
}
function dividir (numero1, numero2) {
    return numero1 / numero2;
}

function efetuarCalculo(numero1, numero2, operacao) {
    let resultado = 0
    switch (operacao) {
        case '+': resultado = somar(numero1, numero2); break;
        case '-': resultado = subtrair(numero1, numero2); break;
        case '*': resultado = multiplicar(numero1, numero2); break;
        case '/': resultado = dividir(numero1, numero2); break;
        default: resultado = 'Erro. Tente novamente.'; break;
    }
    return resultado
}

let n1 = parseFloat(window.prompt('Informe o primeiro número'))
let n2 = parseFloat(window.prompt('Informe o segundo número'))
let op = window.prompt('Informe a operação: ("+"; "-"; "*"; "/")')

document.write(`<h1>${efetuarCalculo(n1, n2, op)}</h1>`)