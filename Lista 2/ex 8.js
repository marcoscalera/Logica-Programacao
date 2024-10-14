let n1 = Number(window.prompt("Digite o 1º número"));
let n2 = Number(window.prompt("Digite o 2º número"));
let n3 = Number(window.prompt("Digite o 3º número"));
let numeros = [n1, n2, n3];
numeros.sort((n1, n2) => n1 - n2);
window.alert(`Ordem crescente: ${numeros.join(", ")}`);