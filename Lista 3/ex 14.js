let valor = parseFloat(window.prompt("Digite o valor da compra"));
let tax = parseFloat(window.prompt("Digite a taxa de juros diária em decimal (ex: 0.02 para 2%)"));
let atraso = parseInt(window.prompt("Digite a quantidade de dias em atraso"), 10);
let total = valor * (1 + (tax * atraso));
if (total <= 100) {
    window.alert("Pagamento deve ser realizado à vista.");
} else if (total > 100 && total <= 300) {
    window.alert(`Pagamento deve ser realizado em 2 parcelas de R$${(total / 2).toFixed(2)}`);
} else if (total > 300 && total <= 500) {
    window.alert(`Pagamento deve ser realizado em 3 parcelas de R$${(total / 3).toFixed(2)}`);
} else if (total > 500 && total <= 900) {
    window.alert(`Pagamento deve ser realizado em 5 parcelas de R$${(total / 5).toFixed(2)}`);
} else if (total > 900 && total <= 1000) { 
    window.alert(`Pagamento deve ser realizado em 6 parcelas de R$${(total / 6).toFixed(2)}`);
} else if (total > 1000) { 
    let parc = parseInt(window.prompt("Em quantas parcelas gostaria de pagar?"), 10);
    if (parc === 1) {
        window.alert("Seu pagamento será à vista.");
    } else if (parc > 1) {
        window.alert(`Seu pagamento será realizado em ${parc} parcelas de R$${(total / parc).toFixed(2)}`);
    } else {
        window.alert("Número de parcelas inválido.");
    }
}