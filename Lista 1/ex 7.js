let premio = Number(window.prompt("Qual o valor do prêmio?"));
let a1 = Number(window.prompt("Digite quanto o apostador 1 investiu"));
let a2 = Number(window.prompt("Digite quanto o apostador 2 investiu"));
let a3 = Number(window.prompt("Digite quanto o apostador 3 investiu"));
let total = Number(a1 + a2 + a3);
let parte1 = a1/total * premio;
let parte2 = a2/total * premio;
let parte3 = a3/total * premio;
window.alert(`A parte do prêmio referente ao apostador:
1 é ${parte1.toFixed(2)}
2 é ${parte2.toFixed(2)}
2 é ${parte3.toFixed(2)}`);