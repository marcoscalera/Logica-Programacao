let n1 = parseInt(window.prompt("Digite o primeiro número inteiro"));
let n2 = parseInt(window.prompt("Digite o segundo número inteiro"));
if (n1 === n2) {
    window.alert("É o mesmo número")
} else {
if (n1 > n2) {
    window.alert(`${n1} é maior que ${n2}`)
} else {
    window.alert(`${n2} é maior que ${n1}`)
}
}