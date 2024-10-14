let diametro = window.prompt("Digite o diâmetro para descobrir a área da circunferência");
let pi = 3.14;
let raio = diametro / 2;
let area = pi * (raio * raio);
window.alert(`A área da circunferência é ${area.toFixed(2)}`);