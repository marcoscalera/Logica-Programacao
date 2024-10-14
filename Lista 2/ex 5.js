let idade = window.prompt("Digite a idade do nadador");
if (idade <= 4) {
    window.alert("Não pode competir");
} else if (idade >= 5 && idade <= 7) {
    window.alert("Pode competir no Infantil A");
} else if (idade >= 8 && idade <= 11) {
    window.alert("Pode competir no Infantil B");
} else if (idade >= 12 && idade <= 13) {
    window.alert("Pode competir no Juvenil A");
} else if (idade >= 14 && idade <= 17) {
    window.alert("Pode competir no Juvenil B");
} else if (idade >= 18) {
    window.alert("Pode competir no Adulto");
}