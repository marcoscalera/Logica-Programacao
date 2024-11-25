var maior = -Infinity
var menor = Infinity
var entradas = 0
var limite = 100
for (let index = 0; entradas < limite; index++) {
    var n = Number(window.prompt("Digite um número (ou 0 para parar)"))
    if (n === 0) {
        break
    }
    if (n > maior) {
        maior = n
    }
    if (n < menor) {
        menor = n
    }
} 
window.alert(`O maior número digitado foi: ${maior}\nO menor número digitado foi: ${menor}`)