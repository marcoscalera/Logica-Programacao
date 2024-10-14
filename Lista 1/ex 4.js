let k = parseFloat(window.prompt("Digite a temperatura em Kelvin")).toFixed(2);
let c = (k - 273.15).toFixed(2);
window.alert("A temperatura em Celsius é " + c);