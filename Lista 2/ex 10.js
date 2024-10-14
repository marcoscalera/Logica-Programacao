let p_alc = 2.7;
let p_gas = 4.1;
let litro = Number(window.prompt("Digite o número de litros"));
let comb = Number(window.prompt("Digite o tipo de combustível:\n1 - Álcool\n2 - Gasolina"));
let desconto = 0;
let total = 0;
if (comb === 1) {
    if (litro <= 20) {
        desconto = 0.02;
    } else {
        desconto = 0.05;
    }
    total = litro * p_alc * (1 - desconto);
} else if (comb === 2) {
    if (litro <= 20) {
        desconto = 0.03;
    } else {
        desconto = 0.06;
    }
    total = litro * p_gas * (1 - desconto);
} else {
    window.alert("Tipo de combustível inválido");
}
if (total > 0) {
    window.alert(`O valor a ser pago é:\nR$ ${total.toFixed(2)}`)
}