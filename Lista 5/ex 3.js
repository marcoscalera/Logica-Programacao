var vinte_pos = new Array (20)
var zeros_pos = []
for (let index = 0; index < vinte_pos.length; index++) {
    vinte_pos[index] = parseInt(window.prompt("Digite um número inteiro!"))
    if (vinte_pos[index] === 0) {
        zeros_pos.push(index)
    }
}
if (zeros_pos.length === 0) {
    window.alert("Nenhum valor 0 foi digitado")
} else {
    window.alert(`O valor 0 foi digitado na posição: ${zeros_pos.join(",")}`)
}