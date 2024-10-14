
let saldo = 1000;
let senha = "123456";
let senhadigitada = window.prompt("Digite sua senha");
if (senha === senhadigitada) {
    let saque = window.prompt("Digite quanto quer sacar");
    if (saque > saldo) {
        window.alert("Saldo Insuficiente");
    } else { 
        (saldo -= saque);
        window.alert(`Você sacou: R$${saque}\nSaldo restante: R$${saldo}`);
    }
}