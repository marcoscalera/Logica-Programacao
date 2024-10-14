let vcompra = parseFloat(window.prompt("Digite o valor de compra do produto"));
let vvenda;
if (vcompra < 20) {
    vvenda = vcompra * 1.45;
} else {
    vvenda = vcompra * 1.30;
}
window.alert(`O valor de venda do produto é: R$${vvenda.toFixed(2)}`);