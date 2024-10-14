let p1 = Number(window.prompt("Digite a nota da P1"));
let p2 = Number(window.prompt("Digite a nota da P2"));
let t1 = Number(window.prompt("Digite a nota do T1"));
let t2 = Number(window.prompt("Digite a nota do T2"));
let nota = (p1 * 0.7 + t1 * 0.3 + p2 * 0.7 + t2 * 0.3)/2;
if (nota >= 6) {
    window.alert("Aprovado");
} else {
    window.alert("Reprovado");
}