let maior = -Infinity 
let menor = Infinity 

while (true) {
    let numero = parseInt(window.prompt("Digite um número (ou 0 para parar)"))
    if (numero === 0) {
        break
    }
    if (numero > maior) {
        maior = numero
    }
    if (numero < menor) {
        menor = numero
    }
}

if (maior === -Infinity && menor === Infinity) {
    window.alert("Números inválidos")
} else {
    window.alert(`O maior número é: ${maior}\nO menor número é: ${menor}`)
}