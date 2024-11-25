let n1 = Number(window.prompt("Digite o primeiro número"))
let n2 = Number(window.prompt("Digite o segundo número"))
if (n2 > n1) {
    let sequencia = []
    for (let n = n1; n <= n2; n++) {
        sequencia.push(n)
    }
    window.alert(sequencia.join(" "))
}
else {
    window.alert("O segundo número deve ser maior...")
}