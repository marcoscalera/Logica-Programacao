let vi = Number(window.prompt("Digite a velocidade inicial"));
let a = Number(window.prompt("Digite a aceleração"));
let t = Number(window.prompt("Digite o tempo em segundos"));
let v = vi + a * t;
window.alert(`A velocidade total do objeto é: ${v}`);