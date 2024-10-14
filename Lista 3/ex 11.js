let s_min = 1412;
let s_fun = Number(window.prompt("Digite seu salário"));
let qnt = (s_fun / s_min).toFixed(2);
window.alert(`A quantidade de salários mínimo é: ${qnt}`);