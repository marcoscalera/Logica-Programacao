let n = Number(window.prompt("Digite um número"))
let resultado = ""
for (let t = 1; t <= 10; t++) {
    resultado += `${n} x ${t} = ${n * t}\n`
}
window.alert(resultado)