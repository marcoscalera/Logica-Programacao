var maior = null
for (let index = 0; ; index++) {
    var n = Number(window.prompt("Digite um número (ou 0 para parar)"))
    if (n === 0) {
        break
    }
    if (n > maior) {
        maior = n
    }
} 
window.alert(`O maior número digitado foi: ${maior}`)