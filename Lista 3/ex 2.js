let n = parseInt(window.prompt("Digite um número inteiro!"));
if (n % 5 === 0 && n % 3 === 0) {
    window.prompt(`Este número é dividido por 5 e 3!\nPor 5 = ${n/5}\nPor 3 = ${n/3}`);
} else {
    window.prompt("Não é dividido por 5 e 3...");
}