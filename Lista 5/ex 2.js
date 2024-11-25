var quinze_pos = new Array (15)
var pares = []
for (let index = 0; index < quinze_pos.length; index++) {
    quinze_pos[index] = parseInt(window.prompt("Digite um número inteiro!"))
    if (quinze_pos[index] % 2 === 0) {
        pares.push(quinze_pos[index])
    }
}
window.alert(`O vetor que armazena os valores digitados é: ${quinze_pos}`)
window.alert(`O vetor que armazena os valores pares é: ${pares}`)