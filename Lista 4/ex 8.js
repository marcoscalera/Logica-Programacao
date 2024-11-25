let idade 
let soma = 0
let quantidade = 0
let menos21 = 0
let mais50 = 0
let media
do {
    idade = parseInt(window.prompt("Digite sua idade"))
    if (idade === -1) {
        break
    }
    quantidade++
    soma += idade
    if (idade < 21) {
        menos21++
    }
    if (idade > 50) {
        mais50++
    }
} while (1)
media = soma / quantidade
window.alert(`A quantidade de pessoas com menos de 21 anos é: ${menos21}\nA quantidade de pessoas com mais de 50 anos é: ${mais50}\nA quantidade de pessoas é: ${quantidade}\nA média de idade é: ${media.toFixed(0)}`)
