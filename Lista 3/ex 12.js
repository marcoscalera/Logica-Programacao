let n1 = Number(window.prompt("Digite a nota 1!"));
let n2 = Number(window.prompt("Digite a nota 2!"));
let n3 = Number(window.prompt("Digite a nota 3!"));
let falta = Number(window.prompt("Digite a quantidade de faltas!"));
if ((n1 + n2 + n3) / 3 >= 7 && falta <= 20) {
    window.alert("Aprovado") }
    else if ((n1 + n2 + n3) / 3 <= 7 && falta <= 20) {
        window.alert("Reprovado por média");
    }
if ((n1 + n2 + n3) / 3 >= 7 && falta > 20) {
    window.alert("Reprovado por falta") }
    else if ((n1 + n2 + n3) / 3 <= 7 && falta > 20) {
        window.alert("Reprovado por falta");
}