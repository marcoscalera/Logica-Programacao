let idade = Number(window.prompt("Digite sua idade"));
if (idade < 17) {
    let maior = 18 - idade;
    window.alert(`Faltam ${maior} anos para a maioridade!`);
} else if (idade > 17) {
    let maior = idade - 18;
    window.alert(`Fazem ${maior} anos que você é maior de idade!`);
} else {
    window.alert("Idade não identificada...");
}