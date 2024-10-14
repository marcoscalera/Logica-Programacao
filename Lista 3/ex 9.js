let n1 = Number(window.prompt("Digite o 1º número"));
let n2 = Number(window.prompt("Digite o 2º número"));
let n3 = Number(window.prompt("Digite o 3º número"));
let n4 = Number(window.prompt("Digite o 4º número"));
let n5 = Number(window.prompt("Digite o 5º número"));
let n = Math.max(n1 && n2 && n3 && n4 && n5);
window.alert(`O maior numero é: ${n}`);